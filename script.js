const INPUT_TEXT = document.getElementById("input--task");
const ADD_BTN = document.getElementById("add--task--btn");
const TASK_LIST = document.getElementById("task--list");

let allTask = [];

class TodoList {
  constructor(tasks, taskId) {
    this.tasks = tasks;
    this.taskId = taskId;
  }

  getTaskInput() {
    ADD_BTN.addEventListener("click", (event) => {
      event.preventDefault();
      const taskId = Math.floor(Math.random() * 999);
      let inputValue = INPUT_TEXT.value;
      if (inputValue !== "") {
        allTask.unshift({
          tasks: inputValue,
          taskId: taskId,
        });
      }
      this.displayTask();
      INPUT_TEXT.value = "";
    });
  }

  displayTask() {
    TASK_LIST.innerHTML = allTask
      .map((task) => {
        return `<li class="flex justify-between p-2 items-center">
          <span class="font-medium">${task.tasks}</span>
          <button class="bg-red-800  p-2 rounded-md text-white text-sm">
            Delete
          </button>
        </li>
            `;
      })
      .join("");
  }

  deleteTask(taskId) {
    console.log(taskId);

    let updatedTask = [];

    allTask.map((task) => {
      if (task.taskId !== taskId) {
        return updatedTask.push(task);
      }
    });

    allTask = updatedTask;
    this.displayTask();
  }
}

const Todo = new TodoList("");

Todo.getTaskInput();
Todo.displayTask();
