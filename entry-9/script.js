const DEFAULT_LINE = "If I loved you without fear…";

// 28 words + sentences + placeholder media + starter positions
// Positions are an even 7 x 4 grid (you will tweak later)
const squares = [
  // row 0
  {
    word: "slow",
    line: "love wouldn’t rush or run.",
    media:
      "videos/slow.mp4",
    x1: -0.8,
    y1: 4,
    x2: 13,
    y2: 29
  },
  {
    word: "real",
    line: "I would show you who I am.",
    media:
      "videos/real bw.mp4",
    x1: 13.2,
    y1: 1.7,
    x2: 26.5,
    y2: 29.5
  },
  {
    word: "steady",
    line: "I’d choose you calmly.",
    media:
      "videos/steady.mp4",
    x1: 26.5,
    y1: 0,
    x2: 40.5,
    y2: 28
  },
  {
    word: "honest",
    line: "no pretending, no guessing.",
    media:
      "videos/honest.mp4",
    x1: 40.7,
    y1: -1.5,
    x2: 56.3,
    y2: 26.5
  },
  {
    word: "soft",
    line: "my heart wouldn’t hide.",
    media:
      "videos/soft.mp4",
    x1: 56.5,
    y1: -1,
    x2: 71.43,
    y2: 26
  },
  {
    word: "staying",
    line: "I wouldn’t disappear.",
    media:
      "videos/staying1.mp4",
    x1: 71.43,
    y1: -1,
    x2: 86.6,
    y2: 26
  },
  {
    word: "open",
    line: "I’d let you see my truth.",
    media:
      "videos/open.mp4",
    x1: 86.5,
    y1: 0,
    x2: 101,
    y2: 25.5
  },

  // row 1
  {
    word: "warm",
    line: "my voice would soften for you.",
    media:
      "videos/warm.mp4",
    x1: -1,
    y1: 29,
    x2: 12,
    y2: 52.8
  },
  {
    word: "present",
    line: "I’d be here, not in my fears.",
    media:
      "videos/present1.mp4",
    x1: 13,
    y1: 29.5,
    x2: 26.8,
    y2: 52.8
  },
  {
    word: "brave",
    line: "I’d speak before I panic.",
    media:
      "videos/brave.mp4",
    x1: 26.5,
    y1: 28.2,
    x2: 40.8,
    y2: 52
  },
  {
    word: "clarity",
    line: "I’d tell you what I feel.",
    media:
      "videos/clarity.mp4",
    x1: 41.6,
    y1: 26.5,
    x2: 56.2,
    y2: 51.8
  },
  {
    word: "courage",
    line: "I’d let you in, slowly.",
    media:
      "videos/courage.mp4",
    x1: 56.35,
    y1: 26,
    x2: 71.7,
    y2: 52.5
  },
  {
    word: "trust",
    line: "in you, but first in myself.",
    media:
      "videos/trust.mp4",
    x1: 71.85,
    y1: 26.3,
    x2: 87.5,
    y2: 53
  },
  {
    word: "calm",
    line: "I’d breathe instead of imagining endings.",
    media:
      "videos/calm.mp4",
    x1: 87.6,
    y1: 27,
    x2: 101.8,
    y2: 51.5
  },

  // row 2
  {
    word: "patience",
    line: "I would give you time.",
    media:
      "videos/patience.mp4",
    x1: -1,
    y1: 54.1,
    x2: 12.55,
    y2: 77.8
  },
  {
    word: "return",
    line: "I’d come back even when scared.",
    media:
      "videos/return1.mp4",
    x1: 13.5,
    y1: 53.5,
    x2: 26.6,
    y2: 74.6
  },
  {
    word: "tenderness",
    line: "you’d feel cared for, not tested.",
    media:
      "videos/tenderness.mp4",
    x1: 27.25,
    y1: 52.5,
    x2: 41,
    y2: 75.55
  },
  {
    word: "truth",
    line: "I’d stop performing sunlight.",
    media:
      "videos/truth.mp4",
    x1: 42,
    y1: 52,
    x2: 55.8,
    y2: 75.1
  },
  {
    word: "safety",
    line: "I’d build home, not chaos.",
    media:
      "videos/safety2.mp4",
    x1: 56.3,
    y1: 52.2,
    x2: 72.4,
    y2: 75
  },
  {
    word: "depth",
    line: "I’d let us be more than surface.",
    media:
      "videos/depth.mp4",
    x1: 72.7,
    y1: 53,
    x2: 87.4,
    y2: 76
  },
  {
    word: "listening",
    line: "I’d hear what you didn’t say.",
    media:
      "videos/listening.mp4",
    x1: 87.65,
    y1: 52,
    x2: 101.65,
    y2: 76.5
  },

  // row 3
  {
    word: "gentleness",
    line: "I’d treat your fears like mine.",
    media:
      "videos/gentleness.mp4",
    x1: -0.5,
    y1: 78.8,
    x2: 12.25,
    y2: 101
  },
  {
    word: "vulnerability",
    line: "I’d tell you where I hurt.",
    media:
      "videos/vulnerability.mp4",
    x1: 13.8,
    y1: 76.4,
    x2: 26.5,
    y2: 100.6
  },
  {
    word: "consistency",
    line: "you’d never wonder what I feel.",
    media:
      "videos/consistency.mp4",
    x1: 27,
    y1: 76.3,
    x2: 40.86,
    y2: 101.4
  },
  {
    word: "choice",
    line: "I’d choose you without trembling.",
    media:
      "videos/choice.mp4",
    x1: 41.4,
    y1: 75.6,
    x2: 56.5,
    y2: 101.5
  },
  {
    word: "grounding",
    line: "I’d stay here, not in the future tragedy.",
    media:
      "videos/grounding.mp4",
    x1: 57.1,
    y1: 75.5,
    x2: 72.2,
    y2: 101.5
  },
  {
    word: "devotion",
    line: "presence, not intensity.",
    media:
      "videos/devotion.mp4",
    x1: 72.5,
    y1: 76.2,
    x2: 87.55,
    y2: 101.8
  },
  {
    word: "home",
    line: "you’d feel safe in my honesty.",
    media:
      "videos/home.mp4",
    x1: 87.68,
    y1: 76.7,
    x2: 101.65,
    y2: 101.1
  }
];

window.addEventListener("DOMContentLoaded", function () {
  const squaresContainer = document.getElementById("squaresContainer");
  const lineOutput = document.getElementById("lineOutput");

  lineOutput.textContent = DEFAULT_LINE;

  squares.forEach((sq) => {
    const div = document.createElement("div");
    div.className = "square";

    // position the square
   div.style.left = sq.x1 + "%";
div.style.top = sq.y1 + "%";
div.style.width = (sq.x2 - sq.x1) * 1 + "%";   // 35% of original width
div.style.height = (sq.y2 - sq.y1) * 1 + "%"; // 35% of original height
    
// build overlay
    const overlay = document.createElement("div");
    overlay.className = "square-overlay";

    const bg = document.createElement("div");
    bg.className = "overlay-bg";

    // image or video
    let mediaEl;
    if (sq.media && /\.(mp4|webm|ogg)$/i.test(sq.media)) {
      mediaEl = document.createElement("video");
      mediaEl.src = sq.media;
      mediaEl.muted = true;
      mediaEl.loop = true;
      mediaEl.playsInline = true;
    } else {
      mediaEl = document.createElement("img");
      mediaEl.src = sq.media;
    }
    mediaEl.className = "overlay-media";

    const label = document.createElement("span");
    label.className = "overlay-label";
    label.textContent = sq.word;

    overlay.appendChild(bg);
    overlay.appendChild(mediaEl);
    overlay.appendChild(label);
    div.appendChild(overlay);
    squaresContainer.appendChild(div);

    // text under palette
    div.addEventListener("mouseenter", () => {
      lineOutput.textContent = sq.line;
      if (mediaEl.tagName === "VIDEO") {
        mediaEl.currentTime = 0;
        mediaEl.play();
      }
    });

    div.addEventListener("mouseleave", () => {
      lineOutput.textContent = DEFAULT_LINE;
      if (mediaEl.tagName === "VIDEO") {
        mediaEl.pause();
      }
    });
  });
});

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
