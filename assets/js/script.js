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

var random_text_api = 'https://random-word-api.herokuapp.com/word?number=300';
var displayText = document.getElementById("#textContent");
var text_box = document.getElementById("head");
var 

function runTest() {
    return fetch(random_text_api)
    .innerHTML = 
}

function showResults() {

}


text_box.addEventListener('input', () => {
    
    var arrayWords = text_display_element.querySelectorAll('span')
    var arrayValue = text_input_element.value.split('')
    

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
    })
    if (correct) showResults();
})

runTest();