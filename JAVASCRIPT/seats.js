document.addEventListener("DOMContentLoaded", function () {
    // Get max seats and seat price from session storage
    const maxSeats = parseInt(sessionStorage.getItem('selectedSeatCount')) || 6;
    const seatPrice = parseInt(sessionStorage.getItem('selectedPrice')) || 150; // Default price is 150

    let selectedSeats = 0;

    // Get the pay button
    const payButton = document.querySelector('.pay-button a');
    
    // Function to update the Pay button's state and amount
    function updatePayButton() {
        if (selectedSeats > 0) {
            const totalAmount = selectedSeats * seatPrice;
            payButton.textContent = `Pay Rs. ${totalAmount}`;
            payButton.style.pointerEvents = "auto";
            payButton.style.opacity = "1";
        } else {
            payButton.textContent = `Pay Rs. 0`;
            payButton.style.pointerEvents = "none";
            payButton.style.opacity = "0.5";
        }
    }

    // Initial state of the Pay button
    updatePayButton();

    // Add click event listener to each available seat
    document.querySelectorAll('.seat.available').forEach(seat => {
        seat.addEventListener('click', function () {
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                selectedSeats--;
            } else if (selectedSeats < maxSeats) {
                this.classList.add('selected');
                selectedSeats++;
            } else {
                alert(`You can only select up to ${maxSeats} seats.`);
            }
            updatePayButton();
        });
    });
});
