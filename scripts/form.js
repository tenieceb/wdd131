
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// adding the products to the drop down list

products.forEach((product) => {
    const selection = document.getElementById('productName');
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selection.appendChild(option);
})

// making it visually known that stars also needs to be filled out
const starsContainer = document.querySelector('.stars');
const starInputs = document.querySelectorAll('.stars input[name="stars"]');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const isStarSelected = Array.from(starInputs).some(input => input.checked);

  if (!isStarSelected) {
    alert('Please select a star rating before submitting the form.');
    return;
  }

  let reviewCounter = Number(localStorage.getItem('reviewCount-ls')) || 0;
  reviewCounter++;
  localStorage.setItem('reviewCount-ls', reviewCounter);

  // Redirect to review.html
  window.location.href = 'review.html';
});