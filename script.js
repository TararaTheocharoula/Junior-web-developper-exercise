document.getElementById('numberForm').addEventListener('submit', function(event) {
    const input = document.getElementById('numberInput');
    const errorMessage = document.getElementById('errorMessage');
    const inputValue = parseFloat(input.value);

    if (isNaN(inputValue) || inputValue <= 10) {
        errorMessage.textContent = 'Number must be greater than 10.';
        errorMessage.style.visibility = 'visible';
        event.preventDefault(); // Prevent form submission
    } else {
        errorMessage.style.visibility = 'hidden';
    }
});
