let taskData = {};

// FOR THE THREE BLOCK
const todo = document.querySelector('#todo')
const progress = document.querySelector('#progress')
const done = document.querySelector('#done')

const columns = [todo, progress, done];
let dragElement = null;


function addTask(taskTitle, taskDesc, column){
    const div = document.createElement("div")
            div.classList.add("task")
            div.setAttribute("draggable", "true")
            div.innerHTML = `
                             <h2>${taskTitle}</h2>
                             <p>${taskDesc}</p>
                             <button>Delete</button>
                            `


            div.addEventListener("drag", () => {
                dragElement = div
            })

            column.appendChild(div);

    const deleteBtn = div.querySelector("button")
    deleteBtn.addEventListener("click",() =>{
        div.remove() ;
        updateTaskCount() ;
    })
}
function updateTaskCount(){
    columns.forEach(col => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");


        taskData[col.id] = Array.from(tasks).map(t => {
            return {
                taskTitle: t.querySelector('h2').innerHTML,
                taskDesc: t.querySelector('p').innerHTML
            }
        })

        localStorage.setItem("tasks", JSON.stringify(taskData));


        count.innerHTML = tasks.length;
    })
}

if (localStorage.getItem("tasks")) {

    const data = JSON.parse(localStorage.getItem("tasks"));

    for (const col in data) {
        const column = document.querySelector(`#${col}`)
        console.log(col, data[col]);
        
        
        data[col].forEach(task => {
            addTask(task.taskTitle, task.taskDesc, column)
        });
    }
    updateTaskCount()
}



// FOR DRAGGING
const tasks = document.querySelectorAll('.task')

tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        dragElement = task; // konsa element drag kiya ja raha hai
    })
})

function addDragEventOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover")

    })
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover")

    })

    column.addEventListener("dragover", (e) => {
        e.preventDefault();

    })
    column.addEventListener("drop", (e) => {
        e.preventDefault();

        column.appendChild(dragElement);
        column.classList.remove("hover");

        updateTaskCount()

    })
}

addDragEventOnColumn(todo)
addDragEventOnColumn(progress)
addDragEventOnColumn(done)


const toggleModalBtn = document.querySelector('#toggle-modal')
const modal = document.querySelector('.modal')
const modalBg = document.querySelector('.bg')
const addTaskBtn = document.querySelector("#add-new-task")

toggleModalBtn.addEventListener("click", () => {

    modal.classList.toggle("active-modal")
})
modalBg.addEventListener("click", () => {

    modal.classList.remove("active-modal")
})

addTaskBtn.addEventListener("click", () => {

    const taskTitle = document.querySelector("#task-title-input").value
    const taskDesc = document.querySelector("#task-desc-input").value

    addTask(taskTitle, taskDesc, todo)
    updateTaskCount()
    modal.classList.remove("active-modal");

    document.querySelector("#task-title-input").value = ""
    document.querySelector("#task-desc-input").value = ""

})
