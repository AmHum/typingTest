var headerEl = document.getElementById("title");
var pageContentEl = document.querySelector(".pageContent");
var divEl = document.querySelector("#textContent");
var paragraphEl = document.createElement("p");
var listEl = document.createElement("li");
var keyboardEl = document.getElementById("keyboard");
var hEl = document.getElementById("head");
var timerEl = document.getElementById("timer");
var orderedEl = document.createElement("ol");
var containerEl = document.querySelector(".container");
var formDiv = document.createElement("div");
var select = document.createElement("select");
var selectEl = document.createElement("select");
var clockTime = 0


divEl.appendChild(paragraphEl);
orderedEl.appendChild(listEl);
containerEl.appendChild(formDiv);



var dropDown = {
    time: [
        {name: "1 minute",
        clockNumber: 1,
    },
    {name: "2 minutes",
    clockNumber: 2,
    },
    {name: "5 minutes",
    clockNumber: 5
},
    {name: "10 minutes",
    clockNumber: 10
}

],

type: [
    {name: "Easy"},
    {name: "Medium"},
    {name: "Hard"},
    {name: "Programming"}
]
}


var clearPage = function(){
    select.innerHTML = "";
    selectEl.innerHTML = "";
    hEl.textContent = "";
    paragraphEl.textContent = "";
    
    
}

var startUp = function(){
    var button = document.createElement("button");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    
    select.innerHTML = "<select name='time' class='select-dropdown' id='time-option'></select>"
    selectEl.innerHTML= "<select name='type' class='select-dropdown' id = 'type-option'></select>"
    
    formDiv.append(div1, div2);
    div1.appendChild(select);
    div1.appendChild(selectEl);
    div2.appendChild(button);
    
    for(i = 0; i < dropDown.time.length; i++){
        var option = document.createElement("option");
        select.appendChild(option);
        option.value = dropDown.time[i].name;
      option.textContent = dropDown.time[i].name; 
      
    }

    for(i=0; i < dropDown.type.length; i++){
        var optionEl = document.createElement("option");
        selectEl.appendChild(optionEl);
        optionEl.textContent = dropDown.type[i].name; 
        optionEl.value = dropDown.type[i].name;
    }

    var chosenTime = select.querySelector("select[name='time']");
    var chosenType = selectEl.querySelector("select[name='type']");
    
    formDiv.appendChild(button); 
    headerEl.textContent = "Speed Typer";
    hEl.textContent = "Our Purpose";
    paragraphEl.textContent = "Welcome to Speed Typer. Are you looking for a job where you have to sit in front of a computer all day? Great news! This is the place for you. Here at Speed Typer you can hone your typing skills to feel comfortable in any job you need to type at. We want to help YOU become a better typer. "
    button.textContent = "Start!"
    
    button.addEventListener("click", buttonListener(chosenTime, chosenType));
        
    }

    var buttonListener = function(time, type){
        return function(){
            processForm(time, type);
        };
    }
    



var processForm = function(time, type){
    
    var pickedTime = dropDown.time.clockNumber;
    var pickedType = dropDown.type.name;
    if(time === pickedTime){
        clockTime = time * 60;
    }

    if(type === pickedType){
        processType(type);
    }
    console.log(time);
    console.log(type);
    

}

var selectOptions = function(selected){
    
    if(dropDown.name === selected){
        window.alert(selected);

    }
}

startUp();
