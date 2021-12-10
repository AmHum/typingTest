var headerEl = document.getElementById("title");
var pageContentEl = document.querySelector(".pageContent");
var divEl = document.querySelector(".textContent");
var paragraphEl = document.createElement("p");
var listEl = document.createElement("li");
var keyboardEl = document.getElementById("keyboard");
var hEl = document.getElementById("head");
var timerEl = document.getElementById("timer");
var orderedEl = document.createElement("ol");
var containerEl = document.querySelector(".form-div");
var formDiv = document.createElement("div");
var clockTime = 0

var random_words_api = 'https://random-word-api.herokuapp.com/word?number=300';


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
    hEl.textContent = "";
    paragraphEl.textContent = "";
    
    
}

var startUp = function(){
    var button = document.createElement("button");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var selectTimeEl = document.createElement("select");
    var selectTypeEl = document.createElement("select");
    
   selectTimeEl.name = "time";
   selectTypeEl.name= "type";
   selectTimeEl.className = "dropdown";
   selectTypeEl.className = "dropdown";
    
    divEl.append(div1, div2);
    div1.appendChild(selectTimeEl);
    div1.appendChild(selectTypeEl);
    div2.appendChild(button);
    
    for(i = 0; i < dropDown.time.length; i++){
        var option = document.createElement("option");
        selectTimeEl.appendChild(option);
        option.value = dropDown.time[i].name;
        option.textContent = dropDown.time[i].name; 
      
    }

    for(i=0; i < dropDown.type.length; i++){
        var optionEl = document.createElement("option");
        selectTypeEl.appendChild(optionEl);
        optionEl.textContent = dropDown.type[i].name; 
        optionEl.value = dropDown.type[i].name;
    }
    
    
    
    headerEl.textContent = "Speed Typer";
    hEl.textContent = "Our Purpose";
    paragraphEl.textContent = "Welcome to Speed Typer. Are you looking for a job where you have to sit in front of a computer all day? Great news! This is the place for you. Here at Speed Typer you can hone your typing skills to feel comfortable in any job you need to type at. We want to help YOU become a better typer. "
    button.textContent = "Start!"
    
    button.addEventListener("click", buttonListener);
    
}

var buttonListener = function(){
    var chosenTime = document.querySelector("select[name='time']");
    var chosenType = document.querySelector("select[name='type']");
    processForm(chosenTime.value, chosenType.value);
}




var processForm = function(time, type){
    
    clockTime = time * 60;
    processType(type);
    
    console.log(time);
    console.log(type);
    }

var processType = function(type){
    switch(type){
        case "Easy": {
            clearPage();
            type = random_words_api;
            fetch(type).then(function(response){
                response.json().then(function(value){
                    typingPage(value)
                });
            })
        }
    }

}

var typingPage = function(words){
    console.log(words);
}

startUp();
