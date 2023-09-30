// //  let firstDiv = document.createElement('div')

// //  firstDiv.textContent = 'shokirjin molchi';

// //  firstDiv.style = 'color: purple;'

// //  document.querySelector('body').appendChild(firstDiv)

//  let fristDiv = document.createElement('div');

//  document.querySelector('.husan').appendChild('firstDiv')


 
// svitafor tag yaratildi:
const svitafor = document.createElement("div");
svitafor.className = "svetafor";

const body = document.querySelector("body");
body.appendChild(svitafor);

// colors tag:
const red = document.createElement("div");
red.className = "red";

const yellow = document.createElement("div");
yellow.className = "yellow";

const green = document.createElement("div");
green.className = "green";

svitafor.appendChild(red);
svitafor.appendChild(yellow);
svitafor.appendChild(green);

//--------------------------------------------

let svitaforStyle = document.querySelector(".svetafor");
svitaforStyle.style =
  "width:200px; background-color:#333; border: 4px solid gray;";

let redStyle = document.querySelector(".red");
redStyle.style =
  "width:200px; height: 200px; background-color:grey; border-radius: 50%";

let yellowStyle = document.querySelector(".yellow");
yellowStyle.style =
  "width:200px; height: 200px; background-color:grey; border-radius: 50%";

let greenStyle = document.querySelector(".green");
greenStyle.style =
  "width:200px; height: 200px; background-color:grey; border-radius: 50%";

function redFunc() {
  redStyle.style =
    "width:200px; height: 200px; background-color:red; border-radius: 50%";
  yellowStyle.style =
    "width:200px; height: 200px; background-color:grey; border-radius: 50%";
  greenStyle.style =
    "width:200px; height: 200px; background-color:grey; border-radius: 50%";
}

function yellowFunc() {
  redStyle.style =
    "width:200px; height: 200px; background-color:grey; border-radius: 50%";
  yellowStyle.style =
    "width:200px; height: 200px; background-color:yellow; border-radius: 50%";
  greenStyle.style =
    "width:200px; height: 200px; background-color:grey; border-radius: 50%";
}

function greenFunc() {
  redStyle.style =
    "width:200px; height: 200px; background-color:grey; border-radius: 50%";
  yellowStyle.style =
    "width:200px; height: 200px; background-color:grey; border-radius: 50%";
  greenStyle.style =
    "width:200px; height: 200px; background-color:green; border-radius: 50%";
}


