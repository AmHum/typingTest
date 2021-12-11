var headerEl = document.getElementById("title");
var pageContentEl = document.querySelector(".pageContent");
var divEl = document.querySelector(".textContent");
var timerEl = document.getElementById("timer");
var paragraphEl = document.createElement("p");
var listEl = document.createElement("li");
var keyboardEl = document.getElementById("keyboard");
var hEl = document.getElementById("head");
var orderedEl = document.createElement("ol");
var containerEl = document.querySelector(".form-div");
var formDiv = document.createElement("div");
var clockTime = 0
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var text_box = document.createElement("p");
var text_input_element = document.createElement("input");
var timeLeft = 0;


// is it possible to set a parameter on an API URL to adjust number of returned words?//

var random_words_api = 'https://random-word-api.herokuapp.com/word?number=30';


divEl.appendChild(paragraphEl);
divEl.append(div1, div2);
orderedEl.appendChild(listEl);
containerEl.appendChild(formDiv);



var dropDown = {
    time: [
        {name: "1 minute",
        clockNumber:1,
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
    {name: "Dictionary"},
    {name: "Medium"},
    {name: "Hard"},
    {name: "Programming"}
]
}


var clearPage = function(){
    hEl.textContent = "";
    paragraphEl.textContent = "";
    div1.innerHTML = "";
    div2.innerHTML = "";
    
}

var startUp = function(){
    var button = document.createElement("button");
    var selectTimeEl = document.createElement("select");
    var selectTypeEl = document.createElement("select");
    
    selectTimeEl.name = "time";
    selectTypeEl.name= "type";
    selectTimeEl.className = "dropdown";
    selectTypeEl.className = "dropdown";
    
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
   var clock = {
       minutes:  0,
       seconds:  0,
   }

    if(clock.seconds > 60){
        clock.minutes = clock.seconds/60;
    }
    
    switch(time){
        case "1 minute": {
            clock.seconds = 1;
            break;
        }
        case "2 minutes": {
            clock.seconds = 2;
            break;
        }
        case "5 minutes": {
            clock.seconds = 5;
            break;
        }
        case "10 minutes": {
            clock = 10;
            break;
        }
    }
    
    clockTime = clock.seconds * 60;
    processType(type);
    
    console.log(time);
    console.log(type);
}

var processType = function(type){
    switch(type){
        case "Dictionary": {
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
countDown = function(){
    var timeLeft = clockTime;
     
     timeInterval = setInterval(function(){
         timeLeft--
         if(timeLeft < 1){
             endGame(timeLeft);
         }
     }, 1000)
     
    
     
}

//I want to create an event listener to start the timer when the first key is pressed//

var typingPage = function(words){
    timerEl.textContent = "Time: " + clockTime;
    var string = "";
    for (i = 0; i < words.length; i++) {
        string = string + " " +  words[i];
    }
    text_box.textContent = string;
    div1.appendChild(text_box);
    div2.appendChild(text_input_element);
    
}

// We'll need to create a mistakes array to count the mistakes for scoring purposes//


text_input_element.addEventListener("input", () => {
    
    var arrayText = text_box.querySelectorAll('span');
    var arrayValue = text_input_element.value.split('');
    
    var correct = true
    arrayText.forEach((characterSpan, index) => {
        var character = arrayValue[index]
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
        } else if (character ===characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        } else {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
        }
    //if (correct) //

    })  
     
})



startUp();