import { variables } from './concepts/variables.js';
import { dataTypes } from './concepts/dataTypes.js';
import { controlFlow } from './concepts/controlFlow.js';
import { functions } from './concepts/functions.js';
import { lists } from './concepts/lists.js';
import { dictionaries } from './concepts/dictionaries.js';
import { objectOrientedProgramming } from './concepts/objectOrientedProgramming.js';
import { fileIO } from './concepts/fileIO.js';
import { errorHandling } from './concepts/errorHandling.js';
import { modules } from './concepts/modules.js';

export const concepts = [
    variables,
    dataTypes,
    controlFlow,
    functions,
    lists,
    dictionaries,
    objectOrientedProgramming,
    fileIO,
    errorHandling,
    modules
];

export function showConcept(index) {
    const conceptContent = document.getElementById('concept-content');
    const currentConcept = document.getElementById('current-concept');

    const concept = concepts[index];
    conceptContent.innerHTML = concept.content;
    currentConcept.textContent = concept.title;

    if (window.pythonEditor) {
        window.pythonEditor.setValue(concept.practice || '');
        window.pythonEditor.refresh();
    } else {
        const pythonEditor = document.getElementById('python-editor');
        if (pythonEditor) {
            pythonEditor.value = concept.practice || '';
        }
    }
}

export function populateTopicList(onSelectTopic) {
    const topicList = document.getElementById('topic-list');
    topicList.innerHTML = ''; // Clear existing topics
    concepts.forEach((concept, index) => {
        const li = document.createElement('li');
        li.textContent = concept.title;
        li.addEventListener('click', () => onSelectTopic(index));
        topicList.appendChild(li);
    });
}