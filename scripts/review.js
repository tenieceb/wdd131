let reviewCounter = Number(window.localStorage.getItem("reviewCount-ls")) || 0;
reviewCounter ++;

displayCount.innerHTML = `Items reviewed: ${reviewCounter}`;

localStorage.setItem("reviewCounter-ls", reviewCounter);