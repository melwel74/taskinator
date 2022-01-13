var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#tasks-to-do");



  var createTaskHandler = function() {
      var listItemEL = document.createElement("li");
      listItemEL.className = "task-item";
      listItemEL.textContent = "This is a new task.";
      taskToDoEl.appendChild(listItemEL);
  }

buttonEl.addEventListener("click", createTaskHandler);


//   buttonEl.addEventListener("click", function() {
//     var listItemEL = document.createElement("li");
//     listItemEL.className = "task-item";
//     listItemEL.textContent = "This is a new task.";
//     taskToDoEl.appendChild(listItemEL);
//   });

