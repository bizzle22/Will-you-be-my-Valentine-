// VERSION CHECK (unchanged)
(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";
    try {
        const response = await fetch(versionUrl);
        if (!response.ok) return;
        const data = await response.json();
        if (currentVersion !== data.version) {
            alert("✨ A newer magical version exists ✨");
        }
    } catch {}
})();

// Messages
const messages = [
  "Are you sure?",
  "Really sure??",
  "Pookie please...",
  "Think again 💭",
  "This hurts 💔",
  "Okay last chance...",
  "Just say yes 😭❤️"
];

let messageIndex = 0;

function handleNoClick() {
  const noBtn = document.querySelector('.no-button');
  const yesBtn = document.querySelector('.yes-button');

  noBtn.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const x = Math.random() * 120 - 60;
  const y = Math.random() * 60 - 30;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  const size = parseFloat(getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = `${size * 1.15}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}

/* ✨ GLITTER CURSOR ✨ */
if (!('ontouchstart' in window)) {
  document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 800);
  });
}

/* 💖 FLOATING EMOJI GENERATOR 💖 */
const heartContainer = document.querySelector(".floating-hearts");
const hearts = ["💖", "💕", "💗", "💘", "💝"];

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 18 + "px";
  heart.style.animationDuration = Math.random() * 6 + 6 + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}, 600);

