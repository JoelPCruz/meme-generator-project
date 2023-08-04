// VARIABLES
document.addEventListener('DOMContentLoaded', () => {  // fires before doc loads into browsers. going into the doc, when it loads execute all of the code in the script.
let imgDiv = document.querySelector('.meme-container'); // selecting elementsß
let imgInput = document.querySelector('#link'); 
let topTextInp = document.querySelector('#topText');
let botTextInp = document.querySelector('#botText');
let form = document.querySelector('.form'); 


//FUNCTIONS


imgDiv.addEventListener('click', (e) =>{  // listening for an event on the button child element of the imgDiv
    if(e.target.tagName === 'BUTTON') {  // if the event target the button tag
        e.target.parentElement.remove(); // remove the parent element of the button tag
    }
}); 



form.addEventListener("submit", (e) => { // when the submit button is clicked... arrow function. e = event
    e.preventDefault(); // stops default behavior when submit is executed
    if(imgInput.value === '' || topTextInp.value === '' || botTextInp.value === '') { // if any of the 3 input values are equal to an empty string
        return alert('please enter a value for each field'); // alert the user
    } else { // anything else... add the html
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

// some pictures
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6nxPD6yU1axSLKfibWbeX0ySWvgxiT-MIkQ&usqp=CAU
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJqodST_QCvdAPWqPfz3SP8Pxb4RFhpC0ZQ&usqp=CAU


// window.addEventListener('load', () => { //only fires when everything is loaded
// });