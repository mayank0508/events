const button = document.querySelector('button');

// button.onclick = function() {

// } // this is one way to handle click events

const clickButton = () => {
  alert('The Event Button is clicked');
};

// button.onclick = clickButton;

button.addEventListener('click', clickButton);

setTimeout(() => {
  button.removeEventListener('click', clickButton);
}, 2000);
