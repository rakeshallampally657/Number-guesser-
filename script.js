let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


function generateTarget() {
    return Math.floor(Math.random() * 10); ;
  }


  function compareGuesses(human, computer, target) {
    let humanDiff=Math.abs(human - target);
    let computerDiff=Math.abs(computer - target);

    if(humanDiff<computerDiff){
        return true;
    }
    else if(humanDiff>computerDiff){
        return false;
    }
    else if(humanDiff===computerDiff){
        return true;
    }
  }


  function updateScore(winnerParam){
      if(winnerParam==='human'){
        humanScore++;
      }

      else if(winnerParam==='computer'){
          computerScore++;
      }

  }


  function advanceRound(){
    currentRoundNumber++;
    

}