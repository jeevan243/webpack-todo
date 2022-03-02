import image from "./images/todo-icon-5.jpg";

import "./css/todo.css";

function appendImage() {
  const myImage = new Image();
  myImage.src = image;

  myImage.classList.add("image");

  document.getElementById("imageDiv").appendChild(myImage);
}

appendImage();
var appendingDiv = document.getElementById("todoDiv");
document.getElementById("addBtn").addEventListener("click", newElement);
var arr = JSON.parse(localStorage.getItem("myTask")) || [];
displayTask(arr);

//create task
function newElement() {
  let input = document.getElementById("myInput").value;

  function task(input) {
    this.input = input;
  }

  var setTask = new task(input);

  arr.push(setTask);
  localStorage.setItem("myTask", JSON.stringify(arr));
  displayTask(arr);
}

//get task and append

function displayTask(arr) {
  appendingDiv.textContent = "";

  arr.map((ele) => {
    let p = document.createElement("p");
    p.textContent = ele.input;

    appendingDiv.append(p);
  });
}
