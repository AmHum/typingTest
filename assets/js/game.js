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



var dropDown = [
    [
       {name: "1 minute",
       number: 1,
    },
    {name: "2 minutes",
    number: 2,
    },
    {name: "5 minutes",
    number: 5
    },
    {name: "10 minutes",
    number: 10
    }

    ],
    
    [
       {name: "Easy"},
       {name: "Medium"},
       {name: "Hard"},
       {name: "Programming"}
    ]
]

divEl.appendChild(paragraphEl);
orderedEl.appendChild(listEl);

var clearPage = function(){
    
}

var startUp = function(){
    var hEl = document.getElementById("head");
    var button = document.createElement("button");
    
    containerEl.appendChild(formEl);
    
    // Needs to split up into at least 2 functions one with the for loop and the other with the value. 
    
    
    for(var i = 0; i < dropDown.length; i++){
        var selectEl = document.createElement("select");
        var result = "";
        formEl.appendChild(selectEl);
        selectEl.innerHTML= "<select name='name-option' class='select-dropdown'></select>"

        
        for(var j = 0; j < dropDown[i].length; j++){
            var choice = dropDown[0][j].name + dropDown[1][j].name;
            var optionEl = document.createElement("option");
            selectEl.appendChild(optionEl);
            optionEl.value = dropDown[i][j].name;
            optionEl.textContent = dropDown[i][j].name;
            result = optionEl.value;
            console.log(result);
            
        }
        button.addEventListener("click",  function(){
        
            console.log()
            if(result === dropDown[i][j].name){
              window.alert(result);
            }
        })
        
        
    }
    
    formEl.appendChild(button); 

    headerEl.textContent = "Speed Typer";
    hEl.textContent = "Our Purpose";
    paragraphEl.textContent = "Welcome to Speed Typer. Are you looking for a job where you have to sit in front of a computer all day? Great news! This is the place for you. Here at Speed Typer you can hone your typing skills to feel comfortable in any job you need to type at. We want to help YOU become a better typer. "
    button.textContent = "Start!"
    console.log(hEl);
}

var processForm = function(selected){
    return function(){
        var selected = drop
        window.alert("button was clicked");
        selectOptions(selected);
    }

}

var selectOptions = function(selected){
    
    if(dropDown.name === selected){
        window.alert(selected);

    }
}

startUp();
