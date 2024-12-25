function editBooking(button) {
    const row = button.parentNode.parentNode;
    const bookingId = row.cells[0].textContent;
    const userName = row.cells[1].textContent;
    const movieTitle = row.cells[2].textContent;
    const showTime = row.cells[3].textContent;
    const seats = row.cells[4].textContent;

    // Fill the form with current values
    document.getElementById('editBookingId').value = bookingId;
    document.getElementById('editUserName').value = userName;
    document.getElementById('editMovieTitle').value = movieTitle;
    document.getElementById('editShowTime').value = showTime;
    document.getElementById('editSeats').value = seats;

    // Show the edit modal
    const editModal = new bootstrap.Modal(document.getElementById('editModal'));
    editModal.show();
}

function saveEdit() {
    const bookingId = document.getElementById('editBookingId').value;
    const userName = document.getElementById('editUserName').value;
    const movieTitle = document.getElementById('editMovieTitle').value;
    const showTime = document.getElementById('editShowTime').value;
    const seats = document.getElementById('editSeats').value;

    // Find the row with the matching booking ID and update the values
    const rows = document.querySelectorAll('#bookingTableBody tr');
    rows.forEach(row => {
        if (row.cells[0].textContent === bookingId) {
            row.cells[1].textContent = userName;
            row.cells[2].textContent = movieTitle;
            row.cells[3].textContent = showTime;
            row.cells[4].textContent = seats;
        }
    });

    // Close the edit modal
    const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
    editModal.hide();
}

function deleteBooking(button) {
    const row = button.parentNode.parentNode;
    const bookingId = row.cells[0].textContent;
    const userName = row.cells[1].textContent;

    if (confirm(`Are you sure you want to delete the booking for ${userName}?`)) {
        row.remove();
        alert(`Booking ID ${bookingId} has been deleted`);
    }
}

function searchBooking() {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput === "") {
        alert("Please enter a booking ID to search.");
        return;
    }

    // Sample search implementation
    const rows = document.querySelectorAll('#bookingTableBody tr');
    let found = false;
    rows.forEach(row => {
        if (row.cells[0].textContent === searchInput) {
            found = true;
            document.getElementById('modalBody').innerHTML = `
                <p><strong>Booking ID:</strong> ${row.cells[0].textContent}</p>
                <p><strong>User Name:</strong> ${row.cells[1].textContent}</p>
                <p><strong>Movie Title:</strong> ${row.cells[2].textContent}</p>
                <p><strong>Show Time:</strong> ${row.cells[3].textContent}</p>
                <p><strong>Seats:</strong> ${row.cells[4].textContent}</p>
            `;
            const searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
            searchModal.show();
        }
    });

    if (!found) {
        alert("No booking found with the entered Booking ID.");
    }
}
