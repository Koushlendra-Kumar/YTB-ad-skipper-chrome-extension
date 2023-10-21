function clickSkipButton() {
    const skipButton = document.getElementsByClassName('ytp-ad-skip-button');
    console.log(skipButton);
    if(skipButton.length > 0) {
        skipButton[0].click();
        console.log('clicked');
    }
}

clickSkipButton();

setInterval(clickSkipButton, 5000);