form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  let letterCounter = Number(localStorage.getItem('letterCount-ls')) || 0;
  letterCounter++;
  localStorage.setItem('letterCount-ls', letterCounter);

  window.location.href = 'letter.html';
});