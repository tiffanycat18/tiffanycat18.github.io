const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const rewindBtn = document.getElementById("rewindBtn");
const forwardBtn = document.getElementById("forwardBtn");

const trackName = document.getElementById("trackName");
const trackDisplay = document.getElementById("trackDisplay");
const currentTimeLabel = document.getElementById("currentTime");
const durationLabel = document.getElementById("duration");
const progressBar = document.getElementById("progressBar");

// Upload stuff
const chooseFileBtn = document.getElementById("chooseFileBtn");
const chooseUrlBtn = document.getElementById("chooseUrlBtn");
const fileSection = document.getElementById("fileSection");
const urlSection = document.getElementById("urlSection");
const fileInput = document.getElementById("fileInput");
const openFilePicker = document.getElementById("openFilePicker");
const loadUrlBtn = document.getElementById("loadUrlBtn");
const urlInput = document.getElementById("urlInput");

// Reels (your PNGs)
const leftReel = document.querySelector(".left-reel");
const rightReel = document.querySelector(".right-reel");

// Format seconds → M:SS
function format(t) {
  if (isNaN(t)) return "0:00";
  let m = Math.floor(t / 60);
  let s = Math.floor(t % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

// PLAY / PAUSE
playBtn.onclick = () => {
  if (!audio.src) return; // must have audio loaded

  if (audio.paused) {
    audio.play();

    // change button state
    playBtn.classList.add("playing");

    // spin reels
    leftReel.classList.add("spin");
    rightReel.classList.add("spin");
  } else {
    audio.pause();

    playBtn.classList.remove("playing");

    leftReel.classList.remove("spin");
    rightReel.classList.remove("spin");
  }
};

// STOP
stopBtn.onclick = () => {
  audio.pause();
  audio.currentTime = 0;

  playBtn.classList.remove("playing");
  leftReel.classList.remove("spin");
  rightReel.classList.remove("spin");
};

// REWIND / FORWARD
rewindBtn.onclick = () => {
  audio.currentTime = Math.max(0, audio.currentTime - 10);
};

forwardBtn.onclick = () => {
  if (!isNaN(audio.duration)) {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
  }
};

// UPDATE TIMES + PROGRESS
audio.addEventListener("timeupdate", () => {
  currentTimeLabel.textContent = format(audio.currentTime);
  if (!isNaN(audio.duration) && audio.duration > 0) {
    progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
  } else {
    progressBar.style.width = "0%";
  }
});

audio.addEventListener("loadedmetadata", () => {
  durationLabel.textContent = format(audio.duration);
});

// when song ends, reset button + reels
audio.addEventListener("ended", () => {
  playBtn.classList.remove("playing");
  leftReel.classList.remove("spin");
  rightReel.classList.remove("spin");
});

// FILE UPLOAD
openFilePicker.onclick = () => fileInput.click();

fileInput.onchange = e => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = event => {
    audio.src = event.target.result;

    const name = file.name.replace(/\.[^/.]+$/, "");
if (trackName) trackName.textContent = name;     // only if the label exists
if (trackDisplay) trackDisplay.textContent = name;

  };
  reader.readAsDataURL(file);
};

// URL UPLOAD
loadUrlBtn.onclick = () => {
  const url = urlInput.value.trim();
  if (!url) return;

  audio.src = url;
const name = "Love Letter";
if (trackName) trackName.textContent = name;
if (trackDisplay) trackDisplay.textContent = name;

};

// TABS
chooseFileBtn.onclick = () => {
  chooseFileBtn.classList.add("active");
  chooseUrlBtn.classList.remove("active");
  fileSection.classList.remove("hidden");
  urlSection.classList.add("hidden");
};

chooseUrlBtn.onclick = () => {
  chooseUrlBtn.classList.add("active");
  chooseFileBtn.classList.remove("active");
  urlSection.classList.remove("hidden");
  fileSection.classList.add("hidden");
};
 