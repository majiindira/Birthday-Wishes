
function showSurprise() {
    const surprise = document.getElementById("surprise");

    surprise.classList.remove("hidden");

    createConfetti();

    document.querySelector("button").innerText =
        "❤️ Surprise Opened!";
}

function createConfetti() {
    const emojis = ["🎉", "❤️", "💖", "🎈", "✨", "🎂"];

    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement("div");

        confetti.innerText =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "25px";
        confetti.style.zIndex = "1000";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = 2000 + Math.random() * 2000;

        confetti.animate([
            { transform: "translateY(0) rotate(0deg)", opacity: 1 },
            { transform: `translateY(110vh) rotate(720deg)`, opacity: 0 }
        ], {
            duration: duration,
            easing: "ease-in"
        });

        setTimeout(() => confetti.remove(), duration);
    }
}
