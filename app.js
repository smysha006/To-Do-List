function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    // Checkbox (Mark as Done)
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Task text
    const span = document.createElement("span");
    span.innerText = taskText;

    checkbox.addEventListener("change", function () {
        span.classList.toggle("done");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
