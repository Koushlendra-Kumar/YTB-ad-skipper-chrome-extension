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

function hideFeedAdd() {
  const adds = document.querySelectorAll("ytd-ad-slot-renderer");
  adds.forEach((add) => {
    console.log("hiding ad");
    add.style.display = "none";
  });
}

function hideYoutubeShorts() {
  const shorts = document.querySelectorAll("ytd-reel-shelf-renderer");
  
  shorts.forEach((short) => {
    console.log("hiding shorts");
    short.style.display = "none";
  });
}

setInterval(hideFeedAdd, 2000);
setInterval(hideYoutubeShorts, 2000);

setInterval(clickSkipButton, 1000);
