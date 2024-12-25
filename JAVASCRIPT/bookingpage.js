// Get the modal
var modal = document.getElementById("rateModal");

// Get the button that opens the modal
var btn = document.querySelector(".rate-btn");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// Get the submit button inside the modal
var submitBtn = document.getElementById("submitRating");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// When the user clicks the submit button, update the rating and close the modal
submitBtn.onclick = function() {
    var selectedRating = document.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
        var ratingValue = selectedRating.value;
        var ratingDisplay = document.querySelector(".four");

        // Update the rating display (this is a simple example, update based on your logic)
        ratingDisplay.innerHTML = `<span class="star">★</span> ${ratingValue}/10 <span class="votes">(42.1K Votes)</span>`;

        // Close the modal
        modal.style.display = "none";
    } else {
        alert("Please select a rating before submitting.");
    }
}
