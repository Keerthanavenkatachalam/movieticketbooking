        const seatNumbers = document.querySelectorAll('.seat-numbers input[type="radio"]');
        const seatCategories = document.querySelectorAll('.seat-categories1');
        const seatSummary = document.getElementById('seat-summary');

        let selectedSeatCount = 0;
        let selectedCategory = '';
        let selectedPrice = 0;

        // Function to update the summary
        function updateSummary() {
            if (selectedSeatCount > 0 && selectedCategory !== '') {
                const totalPrice = selectedSeatCount * selectedPrice;
                seatSummary.textContent = `${selectedSeatCount} seat(s) selected in ${selectedCategory} category. Total Price: Rs. ${totalPrice}`;
            } else {
                seatSummary.textContent = 'No seats selected';
            }
        }

        // Event listener for seat number selection
        seatNumbers.forEach(seat => {
            seat.addEventListener('change', function() {
                selectedSeatCount = parseInt(this.value);
                updateSummary();
            });
        });

        // Event listener for seat category selection
        seatCategories.forEach(category => {
            category.addEventListener('click', function() {
                seatCategories.forEach(cat => cat.style.border = '1px solid #ccc');
                this.style.border = '2px solid #ff5722';
                selectedCategory = this.getAttribute('data-category');
                selectedPrice = parseInt(this.getAttribute('data-price'));
                updateSummary();
            });
        });