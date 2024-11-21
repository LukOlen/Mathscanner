// /Users/lukasolenyi/Desktop/Code/Mathscanner/UI/ui.js

// Create a simple input box with a submit button
document.addEventListener('DOMContentLoaded', function() {
    // Create input element
    const inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.id = 'textInput';
    inputBox.placeholder = 'Enter text here';

    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.id = 'submitButton';
    submitButton.innerText = 'Submit';

    // Append input box and button to the body
    document.body.appendChild(inputBox);
    // Append input box and button to the body
    document.body.appendChild(inputBox);
    
    // Function to send input to main.py
    function sendInputToMainPy(input) {
        fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: input })
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));
    }

    // Add event listener to the submit button
    submitButton.addEventListener('click', function() {
        const inputValue = document.getElementById('textInput').value;
        console.log('Submitted text:', inputValue);
        sendInputToMainPy(inputValue);
    });
    document.body.appendChild(submitButton);

    // Add event listener to the submit button
    submitButton.addEventListener('click', function() {
        const inputValue = document.getElementById('textInput').value;
        console.log('Submitted text:', inputValue);
    });
});