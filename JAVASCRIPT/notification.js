// JavaScript to handle sending notifications and success pop-up

function sendNotification() {
    const recipient = document.getElementById('recipient').value;
    const message = document.getElementById('notification-message').value;

    if (message.trim() === '') {
        alert('Notification message cannot be empty.');
        return;
    }

    // Simulate sending notification
    console.log(`Sending notification to ${recipient}: ${message}`);

    // Show success pop-up
    document.getElementById('successPopup').style.display = 'flex';

    // Clear form fields
    document.getElementById('notificationForm').reset();
}

function closePopup() {
    document.getElementById('successPopup').style.display = 'none';
}
