// Assign a DOM element to a variable using const and document.querySelector.
const button = document.querySelector('button');

// Add an Event Listener to this DOM variable using Element.addEventListener that logs DOM information to the Console.
const clickHandler = function() {
  console.log(document.title);
}

button.addEventListener('click', clickHandler);

// Note: This example does not qualify for the bonus point.