document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#input-message');
    const chatBox = document.querySelector('#chat-box');
    const sendButton = document.querySelector('#send-button');

    sendButton.addEventListener('click', function () {
        if (input.value.trim() !== '') {
            addMessage(input.value, 'user');
            sendMessageToServer(input.value);
            input.value = '';
        }
    });

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
    }

    function sendMessageToServer(message) {
        fetch('http://127.0.0.1:5000/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message }),
        })
        .then(response => response.json())
        .then(data => {
            addMessage(data.response, 'bot');
        })
        .catch(error => {
            console.error('Error:', error);
            addMessage('Something went wrong. Please try again.', 'bot');
        });
    }
});
