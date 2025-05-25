// function clickSkipButton() {
//   [
//     "ytp-ad-skip-button-modern",
//     "ytp-ad-skip-button",
//     "ytp-skip-ad-button",
//   ].forEach((cls) => {
//     const skipButton = document.getElementsByClassName(cls);
//     if (skipButton.length > 0) {
//       skipButton[0].click();
//       console.log("clicked", cls);
//     }
//   });
// }

function hideFeedAds() {
  const ads = document.querySelectorAll("ytd-ad-slot-renderer");
  if (ads.length > 0) {
    ads.forEach((add) => {
      add.style.display = "none";
    });
  }
}

function hideYoutubeShorts() {
  const shorts = document.querySelectorAll("ytd-reel-shelf-renderer");
  const homePageShorts = document.querySelectorAll("ytd-rich-section-renderer");
  if (homePageShorts.length > 0) {
    homePageShorts.forEach((short) => {
      short.style.display = "none";
    });
  }

  if (shorts.length > 0) {
    shorts.forEach((short) => {
      short.style.display = "none";
    });
  }
}

function hideYoutubeShortsEntryButton() {
  const shortsEntry = document.querySelectorAll("#endpoint[title='Shorts']");
  if (shortsEntry.length > 0) {
    shortsEntry.forEach((entry) => (entry.style.display = "none"));
  }
}

setInterval(() => {
  hideFeedAds();
  hideYoutubeShortsEntryButton();
  hideYoutubeShorts();
  // clickSkipButton();
}, 1000);
