
function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet)
}

function play(){
    // step 1: hide the home screen
    removeElementByID('home-screen')
    showElementById('play-ground')
    continueGame();
}
