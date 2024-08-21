function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log(playerPressed);

    if (playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    // checked match or not

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)
        
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        // ------------------------------------------------------------


        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);



        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newlife = currentLife - 1;
        
        // currentLifeElement.innerText = newlife;
        // ----------------------------------------------------
        
        
        const currentLife = getTextElementValueById('current-life');
        const newlife = currentLife - 1;
        setTextElementValueById('current-life', newlife);


        if(newlife === 0){
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet)
}

function play(){
    // step 1: hide the home screen
    removeElementByID('home-screen')
    removeElementByID('final-score')
    showElementById('play-ground')

    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)


    continueGame();
}

function gameOver(){
    removeElementByID('play-ground');
    showElementById('final-score');

    // update final score

    const lastScore = getTextElementValueById('current-score')
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlights

    const currentAlpha = document.getElementById('current-alphabet');
    const currentAlphaValue = currentAlpha.innerText;

    removeBackgroundColorById(currentAlphaValue)
}