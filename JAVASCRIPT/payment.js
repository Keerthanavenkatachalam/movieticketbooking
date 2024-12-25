document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Dummy data for demonstration purposes
    const movieTitle = "Election";
    const theatre = "INOX: Prozone Mall, Coimbatore";
    const dateTime = "Today, 29 Jul, 09:30 PM";
    const numberOfSeats = 2;
    const seatNames = ["A1", "A2"];
    const amount = document.getElementById('amount').innerText;

    // Generate ticket confirmation notification
    const confirmationMessage = `
        <div class="confirmation">
            <h3>Ticket Confirmation</h3>
            <p>Movie: <span>${movieTitle}</span></p>
            <p>Theatre: <span>${theatre}</span></p>
            <p>Date & Time: <span>${dateTime}</span></p>
            <p>Seats: <span>${seatNames.join(', ')}</span></p>
            <p>Total Amount: <span>${amount}</span></p>
            <div class="buttons">
                <button onclick="window.location.href='ticket.html'">Download Ticket</button>
                <button class="cancel-btn" onclick="window.location.href='payment.html'">Cancel</button>
            </div>
        </div>
    `;

    document.body.innerHTML = confirmationMessage;
});