    // === Background audio ===
window.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bgAudio");
  const toggle = document.getElementById("audioToggle");

  if (!audio || !toggle) return;

  let isPlaying = false;

  // Try to start automatically
  function tryAutoPlay() {
    audio.volume = 0.7;
    audio
      .play()
      .then(() => {
        isPlaying = true;
        toggle.textContent = "⏸ stop song";
      })
      .catch(() => {
        // Autoplay blocked by browser
        isPlaying = false;
        toggle.textContent = "▶ play song";
      });
  }

  // Try once when page loads
  tryAutoPlay();

  // User toggle
  toggle.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      toggle.textContent = "▶ play song";
    } else {
      audio
        .play()
        .then(() => {
          isPlaying = true;
          toggle.textContent = "⏸ stop song";
        })
        .catch(() => {
          // If it fails even on click, just keep the button as "▶ play song"
          isPlaying = false;
          toggle.textContent = "▶ play song";
        });
    }
  });
});
