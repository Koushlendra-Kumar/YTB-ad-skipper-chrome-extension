function clickSkipButton() {
    [
      "ytp-ad-skip-button-modern",
      "ytp-ad-skip-button",
      "ytp-skip-ad-button",
    ].forEach((cls) => {
      const skipButton = document.getElementsByClassName(cls);
      if (skipButton.length > 0) {
        skipButton[0].click();
        console.log("clicked", cls);
      }
    });
}

setInterval(clickSkipButton, 1000);
