// Seleccionamos los elementos del DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const totalTasksSpan = document.getElementById("totalTasks");
const completedTasksSpan = document.getElementById("completedTasks");

// Arreglo de tareas iniciales
let tasks = [
  { id: 1, description: "Estudiar JavaScript", completed: false },
  { id: 2, description: "Hacer ejercicio", completed: false },
  { id: 3, description: "Leer un libro", completed: true },
];

// Función para renderizar la lista de tareas
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    // Checkbox para marcar completado
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTask(index));

    // Texto de la tarea
    const taskText = document.createElement("span");
    taskText.textContent = task.description;
    if (task.completed) {
      taskText.classList.add("completed");
    }

    // Botón para eliminar la tarea
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });

  updateCounters();
}

// Función para agregar una nueva tarea
function addTask() {
  const taskDescription = taskInput.value.trim();
  if (taskDescription !== "") {
    const newTask = {
      id: tasks.length + 1,
      description: taskDescription,
      completed: false,
    };
    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
  }
}

// Función para eliminar una tarea
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Función para marcar una tarea como completada
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Función para actualizar los contadores
function updateCounters() {
  totalTasksSpan.textContent = tasks.length;
  completedTasksSpan.textContent = tasks.filter(
    (task) => task.completed
  ).length;
}

// Evento para el botón de agregar
addTaskBtn.addEventListener("click", addTask);

// Renderizar tareas iniciales
renderTasks();
