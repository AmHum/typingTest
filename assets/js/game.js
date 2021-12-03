var headerEl = document.getElementById("title");
var pageContentEl = document.querySelector(".pageContent");
var divEl = document.querySelector("#textContent");
var paragraphEl = document.createElement("p");
var listEl = document.createElement("li");
var keyboardEl = document.getElementById("keyboard");
var timerEl = document.getElementById("timer");
var orderedEl = document.createElement("ol");




pageContentEl.appendChild(paragraphEl);
orderedEl.appendChild(listEl);

var clearPage = function(){
    
}

var startUp = function(){
    headerEl.textContent = "Speed Typer";
    divEl.textContent = "Welcome to Speed Typer. Are you looking for a job where you have to sit in front of a computer all day? Great news! This is the place for you. Here at Speed Typer you can hone your typing skills to feel comfortable in any job you need to type at. We want to help YOU become a better typer. "
}

startUp();