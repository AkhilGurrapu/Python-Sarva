import { concepts, showConcept, populateTopicList } from './concepts.js';

let currentConceptIndex = 0;
let pythonEditor;

const pythonModules = [
    {
        name: "math",
        description: "Provides mathematical functions",
        commonFunctions: ["sqrt()", "sin()", "cos()", "pi"]
    },
    {
        name: "random",
        description: "Generates random numbers",
        commonFunctions: ["random()", "randint()", "choice()"]
    },
    {
        name: "datetime",
        description: "Supplies classes for working with dates and times",
        commonFunctions: ["datetime()", "date()", "time()"]
    },
    {
        name: "os",
        description: "Provides a way of using operating system dependent functionality",
        commonFunctions: ["getcwd()", "listdir()", "path.join()"]
    },
    {
        name: "json",
        description: "Provides encoding and decoding of JSON data",
        commonFunctions: ["dumps()", "loads()"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prev-concept');
    const nextBtn = document.getElementById('next-concept');
    const runCodeBtn = document.getElementById('run-code');
    const toggleTopicsBtn = document.getElementById('toggle-topics');
    const toggleModulesBtn = document.getElementById('toggle-modules');
    const topicsSidebar = document.getElementById('topics-sidebar');
    const modulesSidebar = document.getElementById('modules-sidebar');
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

    // Populate the modules list
    populateModulesList();

    // Show the first concept and load its sample code
    showConceptAndCode(currentConceptIndex);

    prevBtn.addEventListener('click', () => navigateConcept(-1));
    nextBtn.addEventListener('click', () => navigateConcept(1));
    runCodeBtn.addEventListener('click', handleRunCode);
    toggleTopicsBtn.addEventListener('click', () => toggleSidebar(topicsSidebar));
    toggleModulesBtn.addEventListener('click', () => toggleSidebar(modulesSidebar));
    overlay.addEventListener('click', closeSidebars);

    // Close buttons for sidebars
    const closeTopicsBtn = createCloseButton(topicsSidebar);
    const closeModulesBtn = createCloseButton(modulesSidebar);

    topicsSidebar.insertBefore(closeTopicsBtn, topicsSidebar.firstChild);
    modulesSidebar.insertBefore(closeModulesBtn, modulesSidebar.firstChild);
});

function createCloseButton(sidebar) {
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.className = 'close-button';
    closeBtn.addEventListener('click', () => closeSidebar(sidebar));
    return closeBtn;
}

function toggleSidebar(sidebar) {
    sidebar.classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
}

function closeSidebar(sidebar) {
    sidebar.classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
}

function closeSidebars() {
    const topicsSidebar = document.getElementById('topics-sidebar');
    const modulesSidebar = document.getElementById('modules-sidebar');
    const overlay = document.querySelector('.overlay');

    topicsSidebar.classList.remove('active');
    modulesSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

function populateModulesList() {
    const modulesList = document.getElementById('modules-list');
    pythonModules.forEach(module => {
        const moduleDiv = document.createElement('div');
        moduleDiv.className = 'module-info';
        moduleDiv.innerHTML = `
            <h3>${module.name}</h3>
            <p>${module.description}</p>
            <h4>Common Functions:</h4>
            <ul>
                ${module.commonFunctions.map(func => `<li>${func}</li>`).join('')}
            </ul>
        `;
        modulesList.appendChild(moduleDiv);
    });
}

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

function resetOutputArea() {
    const outputArea = document.getElementById('output-area');
    outputArea.innerHTML = '';
}

function outf(text) {
    const outputArea = document.getElementById('output-area');
    outputArea.innerHTML += text.replace(/\n/g, '<br>');
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
    Sk.configure({
        output: outf,
        read: builtinRead,
        __future__: Sk.python3
    });

    const myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, code, true);
    });

    myPromise.then(
        function(mod) {
            console.log('success');
            outputArea.innerHTML += '<br>';
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