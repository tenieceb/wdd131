let displayCount = document.getElementById("displayCount");
let reviewCounter = Number(localStorage.getItem("reviewCount-ls")) || 0;

reviewCounter++;

displayCount.innerHTML = `Items reviewed: ${reviewCounter}`;

localStorage.setItem("reviewCount-ls", reviewCounter);