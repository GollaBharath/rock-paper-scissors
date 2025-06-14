let HumanScore = 0
let ComputerScore = 0

function GetComputerChoice(){
    let a = Math.random()*100
    if (a<33.33) {
        return "paper"
    }
    else if (a>66.66){
        return "rock"
    }
    else {
        return "scissors"
    }
}

function GetPlayerChoice(){
    let choice = prompt("Enter your choice : Rock/Paper/Scissors ")
    if (choice === "Quit"){
        process.exit()
    }
    return choice.toLowerCase()
}

function PlayRound(comp,player){
    if (comp===player) {
        return "Its a tie!!!"
    }
    if (comp === "rock" && player === "paper" || comp === "paper" && player === "scissors" || comp === "scissors" && player === "rock") {
        HumanScore++
        return "You Win!!!"
    }
    else {
        ComputerScore++
        return "You Lose!!!"
    }
}

function Game() {
    while (HumanScore < 5 && ComputerScore < 5) {
        let comp = GetComputerChoice()
        let choice = GetPlayerChoice()
        console.log("Computer Played :"+comp)
        console.log("You Played : "+choice)
        let result = PlayRound(comp,choice)
        console.log("Round Result : " + result)
    }
}

Game()
if (HumanScore > ComputerScore) {
    console.log("Match Result : You Won!!!")
    console.log("Computer Score : "+ComputerScore)
}
else {
    console.log("Match Result : You Lose!!!")
    console.log("Your Score : "+HumanScore)
}