let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task) {
    tasks.push({ task: task, done: false });
    input.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.className = t.done ? "done" : "";
    li.innerHTML = `
      ${t.task}
      <div>
        <button onclick="toggleDone(${i})">✔️</button>
        <button onclick="deleteTask(${i})">🗑️</button>
      </div>
    `;
    list.appendChild(li);
  });
}
