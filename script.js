document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button>Delete</button>
            `;
            taskList.appendChild(li);

            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
        }
    });
});
