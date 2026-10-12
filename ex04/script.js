let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");

function updateCount() {
    taskCount.textContent = taskList.children.length;
}

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");

    let span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");

    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed", checkbox.checked);
    });

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");

    deleteButton.addEventListener("click", function () {
        li.remove();
        updateCount();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
    updateCount();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

updateCount();