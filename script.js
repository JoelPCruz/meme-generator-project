// VARIABLES
document.addEventListener('DOMContentLoaded', () => {  // fires before doc loads into browsers. going into the doc, when it loads execute all of the code in the script.
let imgDiv = document.querySelector('.meme-container'); // selecting the div element where the img will be placed
let imgInput = document.querySelector('#link'); // selecting the link input element
let topTextInp = document.querySelector('#topText');
let botTextInp = document.querySelector('#botText');
let form = document.querySelector('.form'); // selecting the form


//FUNCTIONS


imgDiv.addEventListener('click', (e) =>{  // listening for an event on the button child element of the imgDiv
    if(e.target.tagName === 'BUTTON') {  // if the event target the button tag
        e.target.parentElement.remove(); // remove the parent element of the button tag
    }
}); 



form.addEventListener("submit", (e) => { // when the submit button is clicked... arrow function. e = event
    e.preventDefault(); // stops default behavior when submit is executed
    if(imgInput.value === '' || topTextInp.value === '' || botTextInp.value === '') {
        return alert('please enter a value for each field');
    } else {
    imgDiv.innerHTML += `
        <div class='img-container' style='background-image: url(${imgInput.value})'>
            <h2>${topTextInp.value}</h2>
            <h3>${botTextInp.value}</h3>
            <button class='button'>Remove</button>
        </div>
    `;
    
    imgInput.value = '';
    botTextInp.value = '';
    topTextInp.value = '';
    }
});


});

// window.addEventListener('load', () => { //only fires when everything is loaded
// });