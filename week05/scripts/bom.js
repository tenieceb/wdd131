const input = document.querySelector("#favchap");
const button = document.querySelector('button');
const list = document.querySelector('#list');
let i = 0;
let chaptersArray  = getChapterList ()||[];

button.addEventListener('click', function()
{
    if (input.value != '') {  // make sure the input is not empty
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
      }
});


chaptersArray.forEach(chapter => {
    displayList(chapter);
});

console.log(getChapterList())

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
      input.focus(); // set the focus back to the input
    });
  }

function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray)); //sets the localStorage item that is already named and uses JSON.stringify() to stringify the array
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList')); //gets the localStorage item, no parameter needed and since the function returns to an awaiting array wee need to use JSON.parse on the string
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter); //edefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed.
    setChapterList();
}