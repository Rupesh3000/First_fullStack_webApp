// Initialize counter value
let count = 0;

// Select DOM elements
const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

// Update counter display
function updateCounter() {
  countElement.textContent = count;
  // Disable the decrement button when count is 0
  decrementButton.disabled = count === 0;
}

// Increment button click event
incrementButton.addEventListener("click", function () {
  count++;
  updateCounter();
});

// Decrement button click event
decrementButton.addEventListener("click", function () {
  // Check if count is greater than 0 before decrementing
  if (count > 0) {
    count--;
    updateCounter();
  }
});

// Initial update
updateCounter();
