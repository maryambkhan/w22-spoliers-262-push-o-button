// Assign a DOM element to a variable using const and document.querySelector.
const body = document.querySelector('body');
const output = document.querySelector('output');

// Add an Event Listener to this DOM variable using Element.addEventListener that logs DOM information to the Console.
const moveHandler = function(event) {
  output.innerHTML = `
    <span><strong>X</strong>: ${event.clientX}px</span><br>
    <span><strong>Y</strong>: ${event.clientY}px</span>
  `;
}

body.addEventListener('mousemove', moveHandler);
