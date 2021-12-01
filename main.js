import { callWorkers, createworker, updateWorker } from './createWorker.js'
import { createMission } from './createMission.js'
const workerIds = [];
let workerBtn = document.querySelector('#worker-btn');

let worker = document.querySelector('#worker-input');
let workersList = document.querySelector('.workers-list');
let todoList = document.querySelector('.todo-list');

showWorkers();
showMissions();



workerBtn.addEventListener('click', () => {
    let value = worker.value;
    createworker(value);
    showWorkers();

})


todoList.addEventListener('click', () => {
    showMissions();
})

function showWorkers() {
    let workers = callWorkers();
    workersList.innerHTML = '';
    Object.values(workers).forEach(element => {
        let wrkHtml = ''
        if (element.isChecked) {
            wrkHtml = `<li> <input id="${element.id}" type="checkBox" checked class='check1'> ${element.name}  </li>`
        } else {
            wrkHtml = `<li> <input id="${element.id}" type="checkBox" class='check1'> ${element.name}  </li>`
        }
        workersList.innerHTML += wrkHtml;
    });
    for (let i = 0; i < workersList.childNodes.length; i++) {
        workersList.childNodes[i].childNodes[1].addEventListener('change', (e) => {
            updateWorker(e.target.id, e.target.checked)
            showMissions();
        })
    }

}




// <input type="checkBox" checked>
function showMissions() {
    let workers = callWorkers();
    todoList.innerHTML = ''
    Object.values(workers).forEach(element => {
        let tdHtml = `<div class="todo-1">
        <div class='btns'>
        <h2>${element.name}</h2>
        <button id="${element.id}-btn" onclick="AddMission(${element.id})">Add Mission</button></div>`

        if (element.isChecked) {
            Object.values(element.missions).forEach(item => {

                tdHtml += `<div id='${element.id}-div' class='inner-todo'>${item.name}  <i class="fas fa-trash-alt" onclick="removeMission(${item.id})"></i></div>`
            })
            todoList.innerHTML += tdHtml + '</div>';
        }




    });




}








function checkChecked() {

}