function editUser(button) {
    const row = button.parentNode.parentNode;
    const userId = row.cells[0].textContent;
    const username = row.cells[1].textContent;
    const email = row.cells[2].textContent;
    const role = row.cells[3].textContent;
    const status = row.cells[6].textContent;

    // Fill the form with current values
    document.getElementById('editUserId').value = userId;
    document.getElementById('editUsername').value = username;
    document.getElementById('editEmail').value = email;
    document.getElementById('editRole').value = role;
    document.getElementById('editStatus').value = status;

    // Show the edit modal
    const editModal = new bootstrap.Modal(document.getElementById('editModal'));
    editModal.show();
}

function saveEdit() {
    const userId = document.getElementById('editUserId').value;
    const username = document.getElementById('editUsername').value;
    const email = document.getElementById('editEmail').value;
    const role = document.getElementById('editRole').value;
    const status = document.getElementById('editStatus').value;

    // Find the row with the matching user ID and update the values
    const rows = document.querySelectorAll('#userTableBody tr');
    rows.forEach(row => {
        if (row.cells[0].textContent === userId) {
            row.cells[1].textContent = username;
            row.cells[2].textContent = email;
            row.cells[3].textContent = role;
            row.cells[6].textContent = status;
        }
    });

    // Close the edit modal
    const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
    editModal.hide();
}

function deleteUser(button) {
    const row = button.parentNode.parentNode;
    const username = row.cells[1].textContent;

    if (confirm(`Are you sure you want to delete the user ${username}?`)) {
        row.remove();
        alert(`User ${username} has been deleted`);
    }
}

function searchUser() {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput === "") {
        alert("Please enter a user ID to search.");
        return;
    }

    // Sample search implementation
    const rows = document.querySelectorAll('#userTableBody tr');
    let found = false;
    rows.forEach(row => {
        if (row.cells[0].textContent === searchInput) {
            found = true;
            document.getElementById('modalBody').innerHTML = `
                <p><strong>User ID:</strong> ${row.cells[0].textContent}</p>
                <p><strong>Username:</strong> ${row.cells[1].textContent}</p>
                <p><strong>Email:</strong> ${row.cells[2].textContent}</p>
                <p><strong>Role:</strong> ${row.cells[3].textContent}</p>
                <p><strong>Registration Date:</strong> ${row.cells[4].textContent}</p>
                <p><strong>Last Login:</strong> ${row.cells[5].textContent}</p>
                <p><strong>Status:</strong> ${row.cells[6].textContent}</p>
            `;
            const searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
            searchModal.show();
        }
    });

    if (!found) {
        alert("No user found with the entered User ID.");
    }
}
