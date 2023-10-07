let taskArray = JSON.parse(tasks);

function updatePriorityButtonColor(index) {
  const prioritySpan = document.querySelectorAll(".prioritySpan")[index];
  const priority = taskArray[index].priority;
  if (priority >= 0 && priority <= 1) {
    prioritySpan.parentElement.classList.add('bg-success');
  } else if (priority >= 2 && priority <= 3) {
    prioritySpan.parentElement.classList.add('bg-warning');
  } else if (priority >= 4 && priority <= 5) {
    prioritySpan.parentElement.classList.add('bg-danger');
  }
};

function renderTasks() {
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = "";

  taskArray.forEach(function(item, index) {
    const card = document.createElement('div');
    card.classList.add('card', 'm-2', 'p-2');

    card.innerHTML = `
      <h6 class="card-subtitle mb-2 text-body-secondary">Task</h6>
      <img src="${item.image}" class="card-img-top" alt="Image">
      <div class="card-body">
        <h5 class="card-title">${item.taskName}</h5>
        <p class="card-text">${item.description}</p>
        <hr>
        <p class="card-text"><img id="sign" width="20" height="20" src="https://img.icons8.com/color-glass/48/high-importance.png" alt="high-importance"/>Priority level: <button class="btn btn-outline-secondary mybtn"><span class="prioritySpan">${item.priority}</span></button></p>
        <p class="card-text"><img id="sign" width="30" height="30" src="https://img.icons8.com/plasticine/100/000000/stopwatch.png" alt="stopwatch"/>Deadline: 07.12.2023</p>
        <hr>
        <button class="btn deleteBtn"><img width="30" height="30" src="https://img.icons8.com/plasticine/100/filled-trash.png" alt="filled-trash"/>Delete</button>
        <button class="btn doneBtn"><img width="30" height="30" src="https://img.icons8.com/doodle/48/checked-checkbox.png" alt="checked-checkbox"/>Done</button>
      </div>
    `;

    resultContainer.appendChild(card);

    const priorityButton = card.querySelector('.mybtn');
    priorityButton.addEventListener('click', function() {
      increaseCount(index);
    });

    updatePriorityButtonColor(index);
  });
};

function increaseCount(index) {
  if (taskArray[index].priority < 5) {
    taskArray[index].priority++;
    renderTasks(); 
  }
};

document.getElementById("sorting").addEventListener('click', function() {
  let newVar = taskArray.sort((a, b) => b.priority - a.priority);
  renderTasks(); 
});

renderTasks();