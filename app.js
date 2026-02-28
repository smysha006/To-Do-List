let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");

function addTask() {
    if (input.value.trim() === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = input.value;
    span.classList.add("task-text");

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("task-buttons");

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.classList.add("done-btn");

    doneBtn.onclick = function () {
        if (!span.classList.contains("completed")) {
            span.classList.add("completed");
            doneBtn.textContent = "Undo";
        } else {
            span.classList.remove("completed");
            doneBtn.textContent = "Done";
        }
    };

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.onclick = function () {
        li.remove();
    };

    btnDiv.appendChild(doneBtn);
    btnDiv.appendChild(removeBtn);

    li.appendChild(span);
    li.appendChild(btnDiv);

    list.appendChild(li);

    input.value = "";
}
