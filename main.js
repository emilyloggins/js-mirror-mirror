// target input box in HTML
const textBox = document.querySelector("#message");

// target output boxes
const redBox = document.querySelector("#red");
const blueBox = document.querySelector("#blue");

// add event listener and a function to tell it what to do when it hears "key up"
textBox.addEventListener("keyup", function() {
    redBox.innerHTML = event.target.value;
    blueBox.innerHTML = event.target.value;
})


