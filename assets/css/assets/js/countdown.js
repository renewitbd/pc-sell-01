const countdownElement = document.getElementById("countdown");

let remainingTime = 24 * 60 * 60; // 24 hours in seconds

function updateCountdown() {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  countdownElement.innerHTML = `⏳ অফার শেষ হতে বাকি: ${hours}h ${minutes}m ${seconds}s`;

  if (remainingTime > 0) {
    remainingTime--;
    setTimeout(updateCountdown, 1000);
  } else {
    countdownElement.innerHTML = "❌ সময় শেষ!";
  }
}

updateCountdown();
