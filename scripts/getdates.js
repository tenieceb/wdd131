
const currentyear = document.querySelector("#currentyear");
const lastupdated = document.querySelector("#lastModified");
const today = new Date();
currentyear.innerHTML =`${today.getFullYear()}`;
let lastModif = new Date(document.lastModified);

lastupdated.innerHTML = `Last Modified:  ${lastModif}`;