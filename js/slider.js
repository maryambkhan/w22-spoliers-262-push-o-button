// Assign a DOM element to a variable using const and document.querySelector.
const slider = document.querySelector('#slider');

// Add an Event Listener to this DOM variable using Element.addEventListener that logs DOM information to the Console.
const inputHandler = function() {
  console.log(slider.value);
}

// Bonus point: using `input` instead of `click` (and on range input instead of button)
slider.addEventListener('input', inputHandler);
