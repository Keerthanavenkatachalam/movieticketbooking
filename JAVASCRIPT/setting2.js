// JavaScript to handle opening and closing modals, and toggling between edit and save modes
document.addEventListener('DOMContentLoaded', function() {
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButtons = document.querySelectorAll('.close');
    const modals = document.querySelectorAll('.modal');

    const editButtons = document.querySelectorAll('.edit-btn');
    const saveButtons = document.querySelectorAll('.save-btn');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-target');
            const modal = document.querySelector(modalId);
            modal.style.display = 'block';
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });

    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const form = this.closest('form');
            form.querySelectorAll('input, select, textarea').forEach(field => {
                field.removeAttribute('readonly');
                field.removeAttribute('disabled');
            });
            this.style.display = 'none';
            form.querySelector('.save-btn').style.display = 'inline-block';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButtons = document.querySelectorAll('.close');
    const modals = document.querySelectorAll('.modal');

    const editButtons = document.querySelectorAll('.edit-btn');
    const saveButtons = document.querySelectorAll('.save-btn');

    const successPopup = document.getElementById('successPopup');
    const closePopupButton = document.querySelector('.success-popup .close-popup');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-target');
            const modal = document.querySelector(modalId);
            modal.style.display = 'block';
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });

    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const form = this.closest('form');
            form.querySelectorAll('input, select, textarea').forEach(field => {
                field.removeAttribute('readonly');
                field.removeAttribute('disabled');
            });
            this.style.display = 'none';
            form.querySelector('.save-btn').style.display = 'inline-block';
        });
    });

    saveButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission for demonstration purposes
            const modal = this.closest('.modal');
            modal.style.display = 'none';
            successPopup.style.display = 'flex'; // Show the success pop-up
        });
    });

    closePopupButton.addEventListener('click', () => {
        successPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == successPopup) {
            successPopup.style.display = 'none';
        }
    });
});
