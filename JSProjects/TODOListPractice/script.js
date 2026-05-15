function addNewTask() {
  const taskToAdd = document.getElementById("newTask").value;

  const LI = document.createElement("li");
  LI.classList.add("my-3");

  const DIV = document.createElement("div");
  DIV.classList.add("d-flex", "align-items-center");

  const SPAN1 = document.createElement("span");
  SPAN1.innerText = taskToAdd;

  const BUTTON = document.createElement("button");
  BUTTON.classList.add(
    "btn",
    "btn-danger",
    "ms-4",
    "d-flex",
    "gap-3",
    "align-items-center",
    "justify-content-center",
  );
  BUTTON.onclick = () => LI.remove();

  const I = document.createElement("i");
  I.classList.add("bi", "bi-trash");


  const SPAN2 = document.createElement("span");
  SPAN2.innerText = "Delete";

  BUTTON.appendChild(I);
  BUTTON.appendChild(SPAN2);

  DIV.appendChild(SPAN1);
  DIV.appendChild(BUTTON);

  LI.appendChild(DIV);

  document.getElementById("taskDiv").classList.remove("d-none");

  document.getElementById("taskList").appendChild(LI);


  saveToLocalStorage(taskToAdd);

  document.getElementById("newTask").value = "";

}

function saveToLocalStorage(taskToAdd) {
  const oldTaskArray = JSON.parse(localStorage.getItem("toDoTask")) || [];

  oldTaskArray.push(taskToAdd);

  const newTaskArray = JSON.stringify(oldTaskArray);

  localStorage.setItem("toDoTask", newTaskArray);

}


function printDataDisplay() {
  const oldTaskArray = JSON.parse(localStorage.getItem("toDoTask")) || [];


  oldTaskArray.forEach(element => {


    const LI = document.createElement("li");
    LI.classList.add("my-3");

    const DIV = document.createElement("div");
    DIV.classList.add("d-flex", "align-items-center");

    const SPAN1 = document.createElement("span");
    SPAN1.innerHTML = element;

    const BUTTON = document.createElement("button");
    BUTTON.classList.add(
      "btn",
      "btn-danger",
      "ms-4",
      "d-flex",
      "gap-3",
      "align-items-center",
      "justify-content-center",
    );
    BUTTON.onclick = () => LI.remove();

    BUTTON.onclick = () => {
      LI.remove();
      removeTaskFromLocalStorage(element);
    };

    const I = document.createElement("i");
    I.classList.add("bi", "bi-trash");

    const SPAN2 = document.createElement("span");
    SPAN2.innerText = "Delete";

    BUTTON.appendChild(I);
    BUTTON.appendChild(SPAN2);

    DIV.appendChild(SPAN1);
    DIV.appendChild(BUTTON);

    LI.appendChild(DIV);

    document.getElementById("taskDiv").classList.remove("d-none");

    document.getElementById("taskList").appendChild(LI);


  });


}

printDataDisplay();


function removeTaskFromLocalStorage(taskItem) {

  const oldTaskArray = JSON.parse(localStorage.getItem("toDoTask"));


  const newTaskArray = oldTaskArray.filter((item) => item !== taskItem);
  console.log(newTaskArray);

  const newTaskString = JSON.stringify(newTaskArray)

  localStorage.setItem("toDoTask", newTaskString);

}

