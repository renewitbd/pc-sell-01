const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const diff = tomorrow - now;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `⏳ অফার শেষ হতে: ${hours} ঘন্টা ${mins} মিনিট ${secs} সেকেন্ড বাকি`;

  if (diff <= 0) {
    countdownEl.innerHTML = "⏰ অফার শেষ!";
  }
}

setInterval(updateCountdown, 1000);
