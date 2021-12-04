var headerEl = document.getElementById("title");
var pageContentEl = document.querySelector(".pageContent");
var divEl = document.querySelector("#textContent");
var paragraphEl = document.createElement("p");
var listEl = document.createElement("li");
var keyboardEl = document.getElementById("keyboard");
var timerEl = document.getElementById("timer");
var orderedEl = document.createElement("ol");
var containerEl = document.querySelector(".container");
var formEl = document.createElement("form");


var difficulty = [
    {name: "Easy"},
    {name: "Medium"},
    {name: "Hard"},
    {name: "Programming"}
];

var timeSelect = [
    {time: "1 minute"},
    {time: "2 minutes"},
    {time: "5 minutes"},
    {time: "10 minutes"}

]


divEl.appendChild(paragraphEl);
orderedEl.appendChild(listEl);

var clearPage = function(){
    
}

var startUp = function(){
    var hEl = document.getElementById("head");
    var button = document.createElement("button");
    var select = document.createElement("select");
    var selectEl = document.createElement("select");
    select.innerHTML = "<select name='time-option' class='select-dropdown'></select>";
    selectEl.innerHTML= "<select name='mode-option' class='select-dropdown'></select>"
    
    containerEl.appendChild(formEl);
    formEl.appendChild(select);
    formEl.appendChild(selectEl);
    formEl.appendChild(button);
    
    for(var i = 0; i < timeSelect.length; i++){
        var optionEl = document.createElement("option");
        select.appendChild(optionEl);
        optionEl.value = timeSelect[i].time;
        optionEl.textContent = timeSelect[i].time;
    
    }

    for(var i = 0; i < difficulty.length; i++){
        var option = document.createElement("option");
        selectEl.appendChild(option);
        option.value = difficulty[i].name;
        option.textContent = difficulty[i].name;

    }
    
    

    
    
    
    headerEl.textContent = "Speed Typer";
    hEl.textContent = "Our Purpose";
    paragraphEl.textContent = "Welcome to Speed Typer. Are you looking for a job where you have to sit in front of a computer all day? Great news! This is the place for you. Here at Speed Typer you can hone your typing skills to feel comfortable in any job you need to type at. We want to help YOU become a better typer. "
    button.textContent = "Start!"
    console.log(hEl);
}

var processForm = function(time, mode){


}

startUp();
