
let randomStep = '';
const scores = JSON.parse(localStorage.getItem('eredmeny')) || {
    wins:0,
    losses:0,
    draws:0
};
updateScoreElement();
    
let score = '';
let enemyStep = '';

function computerStep() {
    let rnd = Math.random();
    if (rnd <= 1 / 3)
        enemyStep = 'Rock';
    else if (rnd > 1 / 3 && rnd <= 2 / 3)
        enemyStep = 'Paper';
    else {
        enemyStep = 'Scissors';
    }
    return enemyStep;
}
function updateScoreElement()
{
    document.querySelector('.js-scores').innerHTML=`Wins: ${scores.wins},Losses: ${scores.losses},Ties: ${scores.draws}`;

}

function step(playerStep) {
    let enemyStep = computerStep();
    if (playerStep === enemyStep)
        {
            score = 'Draw';
        }
    else if (playerStep === 'Rock') {
        if (enemyStep === 'Scissors')
          {
            score = 'You Win';
          }
        else
            {
                score = 'You lose';
            }

    }
    else if (playerStep === 'Scissors') {
        if (enemyStep === 'Rock')
            {
                score = 'You lose';
            }
        else
            {
                score = 'You Win';
            }
    }
    else if (playerStep === 'Paper') {
        if (enemyStep === 'Rock')
            {
                score = 'You Win';
            }
        else
            {
                score = 'You lose';
            }
    }
    if(score==='You Win')
        scores.wins++;
    else if(score==='You lose')
        scores.losses++;
    else if(score==='Draw')
        scores.draws++;
    localStorage.setItem('eredmeny',JSON.stringify(scores));
    updateScoreElement();
    console.log(localStorage);

    document.querySelector('.js-result').innerHTML=`${score}`;
    document.querySelector('.js-choices').innerHTML=`You <img src='${playerStep}-emoji.png' class="little-icons"> - <img src='${enemyStep}-emoji.png' class="little-icons"> Computer`;
    return score;

}
step();
function game(playerStep) {
    score = step(playerStep);
    console.log(`You picked ${playerStep}. The computer picked ${enemyStep}. ${score}`);
}
console.log(JSON.stringify(scores));
