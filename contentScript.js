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
  const homePageShorts = document.querySelectorAll("ytd-rich-section-renderer");
  homePageShorts.forEach((short) => {
    console.log("hiding home shorts");
    short.style.display = "none";
  });
  shorts.forEach((short) => {
    console.log("hiding shorts");
    short.style.display = "none";
  });
}

function hideYoutubeShortsEntryButton() {
  const shortsEntry = document.querySelectorAll(
    "#endpoint[title='Shorts']"
  );
  console.log(shortsEntry, shortsEntry.length);
  if (shortsEntry.length > 0) {
    shortsEntry.forEach((entry) => (entry.style.display = "none"));
  }
}

setInterval(() => {
  hideFeedAdd();
  hideYoutubeShortsEntryButton();
  hideYoutubeShorts();
  clickSkipButton();
}, 1000);
