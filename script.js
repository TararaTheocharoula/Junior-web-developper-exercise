// Add event listener to the form submit event
document.getElementById('numberForm').addEventListener('submit', function(event) {
    const input = document.getElementById('numberInput'); // Get input element
    const errorMessage = document.getElementById('errorMessage'); // Get error message element
    const inputValue = parseFloat(input.value); // Convert input value to a number

    // Check if input is not a number or <= 10
    if (isNaN(inputValue) || inputValue <= 10) {
        // Show error message
        errorMessage.textContent = 'Number must be greater than 10.'; 
        // Make error message visible
        errorMessage.style.visibility = 'visible'; 
        event.preventDefault(); 
    } else {
        // Hide error message
        errorMessage.style.visibility = 'hidden'; 
    }
});
