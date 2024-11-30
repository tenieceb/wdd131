let home = document.getElementById( "home" );
let old = document.getElementById( "old");
let newLink = document.getElementById( "new");
let large = document.getElementById( "large");
let small = document.getElementById( "small");

let pageHeading = document.getElementById("output");



home.addEventListener('click', function(){
    getFilter('home');
})

old.addEventListener('click', function(){
    getFilter('old');
})

newLink.addEventListener('click', function(){
    getFilter('new');
})

large.addEventListener('click', function(){
    getFilter('large');
})

small.addEventListener('click', function(){
    getFilter('small');
})


const mainNav = document.querySelector(".nav1");
const hamburgerButton = document.getElementById("menu");

hamburgerButton.addEventListener('click',() =>{
    mainNav.classList.toggle('show');
    hamburgerButton.classList.toggle('show');
})


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "McAllen Texas",
      location: "McAllen, Texas, United States",
      dedicated: "2023, October, 8",
      area: 27897,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mcallen-texas-temple/mcallen-texas-temple-39905-main.jpg"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "2022, July, 3",
      area:  53997,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    },
    {
      templeName: "Concepción Chile",
      location: "Concepción,  Chile",
      dedicated: "2018, October, 28 ",
      area: 23095 ,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-273-main.jpg"
    },
  ];
  createTempleCards(temples);

  function getFilter(id){
    if (id == "home")
    {
        pageHeading.innerHTML = "Home";
        createTempleCards(temples);

    }
    else if (id == "old")
    {
        pageHeading.innerHTML="Old";
        let oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        createTempleCards(oldTemples);
    }
    else if (id == "new")
    {
        pageHeading.innerHTML="New";
        let newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        createTempleCards(newTemples);
    }
    else if (id == "large")
    {
        pageHeading.innerHTML="Large";
        let largeTemples = temples.filter(temple => temple.area > 90000);
        createTempleCards(largeTemples);
    }        
    else if (id == "small")
    {
        pageHeading.innerHTML="Small";
        let smallTemples = temples.filter(temple => temple.area < 10000);
        createTempleCards(smallTemples);
    }
}
  
  function createTempleCards (filteredTemples){
    document.querySelector("#temple-container").innerHTML = ``;
    filteredTemples.forEach((temple) => {
      const templeContainer = document.getElementById('temple-container');
      const templeCard = document.createElement("div");
      templeCard.className = `temple-card`;

    templeCard.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250"> 
    `;

  templeContainer.appendChild(templeCard);
})};
  

