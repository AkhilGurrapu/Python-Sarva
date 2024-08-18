import { concepts, showConcept, populateTopicList } from './concepts.js';
import { initModules } from './modules.js';

let currentConceptIndex = 0;
let pythonEditor;

document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prev-concept');
    const nextBtn = document.getElementById('next-concept');
    const runCodeBtn = document.getElementById('run-code');
    const toggleTopicsBtn = document.getElementById('toggle-topics');
    const previewModulesBtn = document.getElementById('preview-modules');
    const overlay = document.querySelector('.overlay');

    prevBtn.addEventListener('click', () => navigateConcept(-1));
    nextBtn.addEventListener('click', () => navigateConcept(1));
    runCodeBtn.addEventListener('click', handleRunCode);
    
    toggleTopicsBtn.addEventListener('click', toggleTopicsSidebar);
    previewModulesBtn.addEventListener('click', toggleModulesSidebar);
    overlay.addEventListener('click', closeSidebars);

    pythonEditor = CodeMirror.fromTextArea(document.getElementById("python-editor"), {
        mode: "python",
        theme: "dracula",
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        indentUnit: 4,
        tabSize: 4,
        indentWithTabs: true,
        extraKeys: {"Ctrl-Space": "autocomplete"}
    });

    populateTopicList(selectTopic);
    showConcept(currentConceptIndex);

    if (concepts[currentConceptIndex].practice) {
        pythonEditor.setValue(concepts[currentConceptIndex].practice);
        pythonEditor.refresh();
    }

    initModules();
});

function toggleTopicsSidebar() {
    const sidebar = document.getElementById('topics-sidebar');
    sidebar.classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
}

function toggleModulesSidebar() {
    const modulesSidebar = document.getElementById('modules-sidebar');
    const overlay = document.querySelector('.overlay');

    modulesSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeSidebars() {
    const topicsSidebar = document.getElementById('topics-sidebar');
    const modulesSidebar = document.getElementById('modules-sidebar');
    const overlay = document.querySelector('.overlay');

    topicsSidebar.classList.remove('active');
    modulesSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

function selectTopic(index) {
    currentConceptIndex = index;
    showConcept(currentConceptIndex);
    toggleTopicsSidebar();
    resetOutputArea();
}

function navigateConcept(direction) {
    currentConceptIndex = (currentConceptIndex + direction + concepts.length) % concepts.length;
    showConcept(currentConceptIndex);
    resetOutputArea();
}

function resetOutputArea() {
    const outputArea = document.getElementById('output-area');
    outputArea.innerHTML = '';
    if (concepts[currentConceptIndex].practice) {
        pythonEditor.setValue(concepts[currentConceptIndex].practice);
        pythonEditor.refresh();
    } else {
        pythonEditor.setValue('');
        pythonEditor.refresh();
    }
}

async function handleRunCode() {
    const outputArea = document.getElementById('output-area');
    const code = pythonEditor.getValue();

    try {
        const response = await fetch('/api/run-python', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: code }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        outputArea.innerHTML = `<pre>${result.output}</pre>`;
    } catch (error) {
        outputArea.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}