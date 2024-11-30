
const currentyear = document.querySelector("#currentyear");
const lastupdated = document.querySelector("#lastModified");
const today = new Date();
currentyear.innerHTML =`${today.getFullYear()}`;
let lastModif = new Date(document.lastModified);

const lastModifFormatted = lastModif.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
}
)

lastupdated.innerHTML = `Last Modified:  ${lastModifFormatted} ${lastModif.toLocaleTimeString()}`;