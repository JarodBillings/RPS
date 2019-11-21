
//We will first implement a function that generates a choice for the computer, and will
//then compare it to that of the user. The users choice will be found through element id from the html.
//In order to compare the results, we will have to make a funciton "compare" which will establish and respond with
//the winner. This compare function will be below the play function.


//this is where we will find the computers choice and compare it to the users.
var game_result;
let botChoices = ["rock", "paper", "scissors"];
function play(userChoice){
    let botChoice =  botChoices[Math.floor(Math.random() * botChoices.length)];
    let result = compare(userChoice, botChoice);
    
    let containerResults = document.createElement("div");
    containerResults.className = "res-item";


    let userImg = document.createElement("img");
    userImg.src = `img/${userChoice}.jpg`
    userImg.clasName = getClass(userChoice);

    let winnerText = document.createElement("h3");
    winnerText.innerText = result;

    let botImg = document.createElement("img");
    botImg.src =  `img/${botChoice}.jpg`
    botImg.className = getClass(botChoice);


    containerResults.appendChild(userImg);
    containerResults.appendChild(winnerText);
    containerResults.appendChild(botImg);
    document.getElementById("results").appendChild(containerResults);
    

}

function getClass(choice){
    if(choice === "rock") return "rock-button";
    if(choice === "paper") return "paper-button";
    if(choice === "scissors") return "scissors-button";
    
}



//this is where we decalre how to compare the choices based on the basic rules of RPS.
//think about how a player wins/loses. What is the logic? View the flowchart for reference. 
var compare = function(userChoice, botChoice){
    console.log(userChoice + ":" + botChoice);
    if(userChoice === botChoice) return "tie";
    if(userChoice === "rock"){
        if(botChoice == "paper") return "Bot Win";
        else return "You Win";
    }
    if(userChoice === "paper"){
        if(botChoice == "scissor") return "Bot Win";
        else return "You Win";
    }
    if(userChoice === "scissors"){
        if(botChoice == "rock") return "Bot Win";
        else return "You Win";
    }
    
}
