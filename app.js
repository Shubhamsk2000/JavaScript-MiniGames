const computerChoiceDisplay = document.getElementById("computerChoice")
const yourChoiceDisplay = document.getElementById("yourChoice")
const resultDisplay = document.getElementById("result")

let userChoice;
let computerChoice;
const possibleChoices = document.querySelectorAll("button")
possibleChoices.forEach(possibleChoices=>possibleChoices.addEventListener('click',(e)=>{
    userChoice = e.target.id;
    function yourchoice(){
        yourChoiceDisplay.innerHTML = userChoice;
    }
    setTimeout(yourchoice,100)

    generateComputerChoice();
    result()
}));

function generateComputerChoice(){
    const randomNum = Math.floor(Math.random()*3+1);
    if (randomNum==1){
        computerChoice ="Rock";
    }
    else if(randomNum==2){
        computerChoice ="Scissors";
    }
    else if(randomNum ==3){
        computerChoice = "Paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
function result (){
    let message;
    if(userChoice==computerChoice){
        message = "IT'S DRAW"
    }
    else if(computerChoice=="Rock" && userChoice =="Scissors"||computerChoice=="Paper" && userChoice== "Rock"||computerChoice=="Scissors"&&userChoice=="Paper"){
        message = "YOU LOST"
    }
    else if(computerChoice=="Rock" && userChoice =="Paper"||computerChoice=="Paper" && userChoice== "Scissors"||computerChoice=="Scissors"&&userChoice=="Rock"){
        message ="YOU WON"
    }
    resultDisplay.innerHTML= message
}