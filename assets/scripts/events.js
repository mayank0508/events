const button = document.querySelectorAll('button');

// button.onclick = function() {

// } // this is one way to handle click events

const clickButton = (event) => {
 // event.target.disabled = true; // this property is used to make sure that the same button is not clicked more than one time
  console.log(event);
};

// button.onclick = clickButton;

// button.addEventListener('click', clickButton);

// button.forEach(button => {
//   button.addEventListener('click', clickButton);
// })

// setTimeout(() => {  // this command is used to time out the particular elemtn after a while
//   button.removeEventListener('click', clickButton);
// }, 2000);

button.forEach(button => { // this is a type of event handler which is triggered when you hover over a button 
  button.addEventListener('mouseenter', clickButton);
})

