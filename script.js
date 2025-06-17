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

function PlayRound(player) {
    let comp = GetComputerChoice()
    if (comp===player) {
        console.log("Its a tie!!!")
        DisplayResult("Its a tie!!!")
    }
    else if (comp === "rock" && player === "paper" || comp === "paper" && player === "scissors" || comp === "scissors" && player === "rock") {
        console.log("You Win!!!")
        DisplayResult("You Win!!!")
        HumanScore++
    }
    else {
        console.log("You Lose!!!")
        DisplayResult("You Lose!!!")
        ComputerScore++
    }
    DisplayPlayerScore("Your Score : " + HumanScore)
    DisplayComputerScore("Computer Score : " + ComputerScore)
    if (HumanScore >= 5) {
        alert("Congratulations! You beat the system 🥳")
        HumanScore = 0
        ComputerScore = 0
        DisplayPlayerScore("Your Score : " + HumanScore)
        DisplayComputerScore("Computer Score : " + ComputerScore)
    }
    else if (ComputerScore >= 5) {
        alert("You got bested by this bot 😮‍💨. Wanna try again?")
        HumanScore = 0
        ComputerScore = 0
        DisplayPlayerScore("Your Score : " + HumanScore)
        DisplayComputerScore("Computer Score : " + ComputerScore)
    }
}

function DisplayResult(text) {
    let display_text = document.getElementById("Text")
    display_text.textContent = text
}

function DisplayPlayerScore(text) {
    let display_text = document.getElementById("playerScore")
    display_text.textContent = text
}

function DisplayComputerScore(text) {
    let display_text = document.getElementById("computerScore")
    display_text.textContent = text
}
