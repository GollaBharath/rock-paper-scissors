let HumanScore = 0
let ComputerScore = 0

function GetComputerChoice(){
    let a = Math.random()*100
    if (a<33.33) {
        return "Paper"
    }
    else if (a>66.66){
        return "Rock"
    }
    else {
        return "Scissors"
    }
}

function GetPlayerChoice(){
    let choice = prompt("Enter your choice : Rock/Paper/Scissors ")
    return choice
}

function PlayRound(comp,player){
    let order = ["Rock","Paper","Scissors"]
    if (comp,player in order){
        console.log("Works")
    }
    else {
        console.log("Invalid Input")
    }
}

let comp = GetComputerChoice()
console.log("Computer Played :"+comp)
let choice = GetPlayerChoice()
console.log("You Played : "+choice)
PlayRound(comp,choice)