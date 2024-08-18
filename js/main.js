import { concepts, showConcept, populateTopicList } from './concepts.js';

let currentConceptIndex = 0;
let pythonEditor;

document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prev-concept');
    const nextBtn = document.getElementById('next-concept');
    const runCodeBtn = document.getElementById('run-code');
    const toggleTopicsBtn = document.getElementById('toggle-topics');
    const topicsSidebar = document.getElementById('topics-sidebar');
    const overlay = document.querySelector('.overlay');

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

    // Populate the topics list
    populateTopicList(selectTopic);

    // Show the first concept and load its sample code
    showConceptAndCode(currentConceptIndex);

    prevBtn.addEventListener('click', () => navigateConcept(-1));
    nextBtn.addEventListener('click', () => navigateConcept(1));
    runCodeBtn.addEventListener('click', handleRunCode);
    toggleTopicsBtn.addEventListener('click', toggleTopicsSidebar);
    overlay.addEventListener('click', closeSidebars);

    // Close button for topics sidebar
    const closeTopicsBtn = document.createElement('button');
    closeTopicsBtn.textContent = '×';
    closeTopicsBtn.className = 'close-button';
    closeTopicsBtn.addEventListener('click', closeSidebars);
    topicsSidebar.insertBefore(closeTopicsBtn, topicsSidebar.firstChild);
});

function selectTopic(index) {
    currentConceptIndex = index;
    showConceptAndCode(currentConceptIndex);
    closeSidebars();
    resetOutputArea();
}

function navigateConcept(direction) {
    currentConceptIndex = (currentConceptIndex + direction + concepts.length) % concepts.length;
    showConceptAndCode(currentConceptIndex);
    resetOutputArea();
}

function showConceptAndCode(index) {
    showConcept(index);
    loadSampleCode(index);
}

function loadSampleCode(index) {
    const concept = concepts[index];
    if (concept.practice) {
        pythonEditor.setValue(concept.practice);
        pythonEditor.refresh();
    }
}

function toggleTopicsSidebar() {
    const sidebar = document.getElementById('topics-sidebar');
    sidebar.classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
}

function closeSidebars() {
    const topicsSidebar = document.getElementById('topics-sidebar');
    const overlay = document.querySelector('.overlay');

    topicsSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

function resetOutputArea() {
    const outputArea = document.getElementById('output-area');
    outputArea.innerHTML = '';
}

function outf(text) {
    const outputArea = document.getElementById('output-area');
    outputArea.innerHTML += text.replace(/\\n/g, '<br>');
}

function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

function handleRunCode() {
    const outputArea = document.getElementById('output-area');
    const code = pythonEditor.getValue();

    outputArea.innerHTML = '';

    Sk.pre = "output";
    Sk.configure({output: outf, read: builtinRead});

    const myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, code, true);
    });

    myPromise.then(
        function(mod) {
            console.log('success');
        },
        function(err) {
            outputArea.innerHTML += `<span style="color: red;">${err.toString()}</span>`;
        }
    );
}

// Export functions for testing
window.selectTopic = selectTopic;
window.navigateConcept = navigateConcept;
window.handleRunCode = handleRunCode;