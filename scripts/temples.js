let home = document.getElementById( "home" );
let old = document.getElementById( "old");
let newLink = document.getElementById( "new");
let large = document.getElementById( "large");
let small = document.getElementById( "small");

let pageHeading = document.getElementById("output");


function getPageTitle(id){
    if (id == "home")
    {
        pageHeading.innerHTML = "Home";
    }
    else if (id == "old")
    {
        pageHeading.innerHTML="Old";
    }
    else if (id == "new")
    {
        pageHeading.innerHTML="New";
    }
    else if (id == "large")
    {
        pageHeading.innerHTML="Large";
    }        
    else if (id == "small")
    {
        pageHeading.innerHTML="Small";
    }
}

home.addEventListener('click', function(){
    getPageTitle('home');

})

old.addEventListener('click', function(){
    getPageTitle('old');
})

newLink.addEventListener('click', function(){
    getPageTitle('new');
})

large.addEventListener('click', function(){
    getPageTitle('large');
})

small.addEventListener('click', function(){
    getPageTitle('small');
})


const mainNav = document.querySelector(".nav1");
const hamburgerButton = document.getElementById("menu");

hamburgerButton.addEventListener('click',() =>{
    mainNav.classList.toggle('show');
    hamburgerButton.classList.toggle('show');
})