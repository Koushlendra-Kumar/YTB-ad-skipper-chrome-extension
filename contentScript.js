function clickSkipButton() {
    const skipButton = document.getElementsByClassName(".ytp-ad-skip-button-modern")
    if(skipButton.length > 0) {
        skipButton[0].click();
        console.log('clicked');
    }
    const oldSkipButton = document.getElementsByClassName('ytp-ad-skip-button');
    
    if(oldSkipButton.length > 0) {
        oldSkipButton[0].click();
        console.log('clicked');
    }
}

clickSkipButton();

setInterval(clickSkipButton, 1000);
