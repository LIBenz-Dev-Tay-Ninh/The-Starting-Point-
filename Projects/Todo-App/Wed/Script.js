let tasks = [];

function loadTasks() {
  const data = localStorage.getItem("tasks");
  if (data) tasks = JSON.parse(data);
  renderTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task) {
    tasks.push({ task: task, done: false });
    input.value = "";
    saveTasks();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.className = `list-group-item d-flex justify-content-between align-items-center ${t.done ? "list-group-item-success" : ""}`;
    li.innerHTML = `
      <span style="${t.done ? "text-decoration: line-through;" : ""}">${t.task}</span>
      <div>
        <button class="btn btn-sm btn-success me-2" onclick="toggleDone(${i})">✔️</button>
        <button class="btn btn-sm btn-danger" onclick="deleteTask(${i})">🗑️</button>
      </div>
    `;
    list.appendChild(li);
  });
}

window.onload = loadTasks;
