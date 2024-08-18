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

export function initModules() {
    const modulesSidebar = document.getElementById('modules-sidebar');
    const closeBtn = modulesSidebar.querySelector('.close-button');
    closeBtn.addEventListener('click', closeModulesSidebar);

    const modulesContent = document.getElementById('modules-content');
    modulesContent.innerHTML = ''; // Clear existing content
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
        modulesContent.appendChild(moduleDiv);
    });
}

function closeModulesSidebar() {
    const modulesSidebar = document.getElementById('modules-sidebar');
    const overlay = document.querySelector('.overlay');
    modulesSidebar.classList.remove('active');
    overlay.classList.remove('active');
}