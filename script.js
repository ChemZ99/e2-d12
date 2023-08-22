const savebutton = document.getElementById("savebutton");
const deletebutton = document.getElementById("deletebutton");
const inputfield = document.getElementById("name");
const namecontainer = document.getElementById("namecontainer");
const counter = document.getElementById("counter");

const appendName = function (name) {
  namecontainer.innerText = name;
};

const deleteLastName = function () {
  namecontainer.innerText = "";
  localStorage.removeItem("name");
};

savebutton.onclick = function (Event) {
  Event.preventDefault();
  let inputdata = inputfield.value;
  localStorage.setItem("name", JSON.stringify(inputdata));
  appendName(inputdata);
};

deletebutton.onclick = function (Event) {
  Event.preventDefault();
  deleteLastName();
};

let time = sessionStorage.getItem("timer") ? sessionStorage.getItem("timer") : 0;

const timeradd = function () {
  //time = undefined ? 0 : JSON.parse(sessionStorage.getItem("timer"));
  time++;
  counter.innerText = time;
  sessionStorage.setItem("timer", time);
};

setInterval(timeradd, 1000);
