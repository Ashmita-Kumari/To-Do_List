document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {

  const taskInput = document.getElementById("taskInput");

  const taskValue = taskInput.value.trim();

  if (taskValue === "") {

    alert("Please enter a task!");

    return;

  }

  const li = document.createElement("li");

  li.textContent = taskValue;

  // Toggle complete on click

  li.addEventListener("click", function () {

    li.classList.toggle("completed");

  });

  // Delete button

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";

  deleteBtn.className = "delete";

  deleteBtn.addEventListener("click", function (e) {

    e.stopPropagation(); // prevent triggering complete toggle

    li.remove();

  });

  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";

}

