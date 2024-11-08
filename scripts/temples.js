const pageTitle = document.getElementById('output');
const navigationName = document.getElementById("nav1");
const navigationHome = document.getElementById('home');
const navigationOld = document.getElementById('old');
const navigationNew = document.getElementById('new');
const navigationLarge = document.getElementById('large');
const navigationSmall = document.getElementById('small');



function copyTitle(){
    const navigationName = document.getElementById('nav1');

    pageTitle.innerhtml = navigationName.value;
}

navigationName.addEventListener('click', copyTitle);