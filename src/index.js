
function addTask(task) {
  let newTask = document.createElement("li");
  newTask.textContent = task;
  document.getElementById("tasks").appendChild(newTask);
}


document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskToAdd = event.target["new-task-description"].value;
    if (taskToAdd !== "") {
      addTask(taskToAdd);
    }
  });
});

