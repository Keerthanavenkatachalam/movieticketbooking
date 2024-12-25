let movies = [
    {
        title: "Inception",
        genre: "Sci-Fi",
        releaseDate: "2010-07-16",
        duration: "148 min",
        language: "English",
        format: "IMAX",
        theatres: "5",
        director: "Christopher Nolan",
        castAndCrew: "Leonardo DiCaprio, Joseph Gordon-Levitt",
        image: ""
    }
];

let currentMovieIndex = null;
let currentAction = "";

// Function to render movies list
function renderMovies() {
    const moviesList = document.getElementById('moviesList');
    moviesList.innerHTML = "";
    movies.forEach((movie, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>${movie.releaseDate}</td>
            <td>${movie.duration}</td>
            <td>${movie.language}</td>
            <td>${movie.format}</td>
            <td>${movie.theatres}</td>
            <td>${movie.director}</td>
            <td>${movie.castAndCrew}</td>
            <td>
                <button onclick="viewMovie(${index})">View</button>
                <button onclick="showEditForm(${index})">Edit</button>
                <button onclick="confirmDelete(${index})">Delete</button>
            </td>
        `;
        moviesList.appendChild(row);
    });
}

// Function to add a new movie

// Function to add a new movie
function addMovie() {
    const movie = {
        title: document.getElementById('title').value,
        genre: document.getElementById('genre').value,
        releaseDate: document.getElementById('releaseDate').value,
        duration: document.getElementById('duration').value,
        language: document.getElementById('language').value,
        format: document.getElementById('format').value,
        theatres: document.getElementById('theatres').value,
        director: document.getElementById('director').value,
        castAndCrew: document.getElementById('castAndCrew').value,
        image: "" // Handle image file upload as needed
    };
    movies.push(movie);
    renderMovies();
    document.getElementById('addMovieForm').reset();
    showSuccessMessage("Movie added successfully!"); // Show success message
}

// Function to show success message
function showSuccessMessage(message) {
    const successModal = document.getElementById('successModal');
    document.getElementById('successMessage').innerText = message;
    successModal.style.display = 'block';
    closeSuccessModalAfterDelay(); // Close after delay
}

// Function to close success modal
function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
}

// Function to close the success modal after a delay
function closeSuccessModalAfterDelay() {
    setTimeout(() => {
        closeSuccessModal();
    }, 2000); // Adjust delay as needed
}



// Function to show the edit form
function showEditForm(index) {
    currentMovieIndex = index;
    currentAction = "edit";
    const movie = movies[index];
    document.getElementById('addMovieFormContainer').style.display = 'none';
    document.getElementById('editMovieFormContainer').style.display = 'block';
    document.getElementById('editMovieForm').innerHTML = `
        <label for="editTitle">Title:</label>
        <input type="text" id="editTitle" value="${movie.title}">
        <label for="editGenre">Genre:</label>
        <input type="text" id="editGenre" value="${movie.genre}">
        <label for="editReleaseDate">Release Date:</label>
        <input type="date" id="editReleaseDate" value="${movie.releaseDate}">
        <label for="editDuration">Duration:</label>
        <input type="text" id="editDuration" value="${movie.duration}">
        <label for="editLanguage">Language:</label>
        <input type="text" id="editLanguage" value="${movie.language}">
        <label for="editFormat">Format:</label>
        <input type="text" id="editFormat" value="${movie.format}">
        <label for="editTheatres">Theatres:</label>
        <input type="text" id="editTheatres" value="${movie.theatres}">
        <label for="editDirector">Director:</label>
        <input type="text" id="editDirector" value="${movie.director}">
        <label for="editCastAndCrew">Cast & Crew:</label>
        <input type="text" id="editCastAndCrew" value="${movie.castAndCrew}">
        <button type="button" onclick="confirmEdit()">Update Movie</button>
        <button type="button" onclick="cancelEdit()">Cancel</button>
    `;
}

// Function to update the movie details
function updateMovie() {
    const updatedMovie = {
        title: document.getElementById('editTitle').value,
        genre: document.getElementById('editGenre').value,
        releaseDate: document.getElementById('editReleaseDate').value,
        duration: document.getElementById('editDuration').value,
        language: document.getElementById('editLanguage').value,
        format: document.getElementById('editFormat').value,
        theatres: document.getElementById('editTheatres').value,
        director: document.getElementById('editDirector').value,
        castAndCrew: document.getElementById('editCastAndCrew').value,
        image: "" // Handle image file upload as needed
    };
    movies[currentMovieIndex] = updatedMovie;
    renderMovies();
    document.getElementById('editMovieFormContainer').style.display = 'none';
    document.getElementById('addMovieFormContainer').style.display = 'block';
    closeConfirmationModal();
}

// Function to cancel the edit operation
function cancelEdit() {
    document.getElementById('editMovieFormContainer').style.display = 'none';
    document.getElementById('addMovieFormContainer').style.display = 'block';
}

// Function to confirm delete operation
function confirmDelete(index) {
    currentMovieIndex = index;
    currentAction = "delete";
    document.getElementById('confirmationMessage').innerText = "Are you sure you want to delete this movie?";
    document.getElementById('confirmationModal').style.display = 'block';
}

// Function to delete the movie
function deleteMovie() {
    movies.splice(currentMovieIndex, 1);
    renderMovies();
    closeConfirmationModal();
}

// Function to view movie details
function viewMovie(index) {
    const movie = movies[index];
    document.getElementById('viewMovieDetails').innerHTML = `
        <h2>Movie Details</h2>
        <p><strong>Title:</strong> ${movie.title}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
        <p><strong>Duration:</strong> ${movie.duration}</p>
        <p><strong>Language:</strong> ${movie.language}</p>
        <p><strong>Format:</strong> ${movie.format}</p>
        <p><strong>Theatres:</strong> ${movie.theatres}</p>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Cast & Crew:</strong> ${movie.castAndCrew}</p>
        <button onclick="confirmEditInView(${index})">Edit</button>
        <button onclick="confirmDeleteInView(${index})">Delete</button>
    `;
    document.getElementById('viewMovieDetailsModal').style.display = 'block';
}

// Function to close the movie details modal
function closeModal() {
    document.getElementById('viewMovieDetailsModal').style.display = 'none';
}

// Function to close the confirmation modal
function closeConfirmationModal() {
    document.getElementById('confirmationModal').style.display = 'none';
}

// Function to confirm edit operation
function confirmEdit() {
    document.getElementById('confirmationMessage').innerText = "Are you sure you want to update this movie?";
    currentAction = "edit";
    document.getElementById('confirmationModal').style.display = 'block';
}

// Function to confirm edit operation from the view modal
function confirmEditInView(index) {
    currentMovieIndex = index;
    currentAction = "editInView";
    document.getElementById('confirmationMessage').innerText = "Are you sure you want to edit this movie?";
    document.getElementById('confirmationModal').style.display = 'block';
}

// Function to confirm delete operation from the view modal
function confirmDeleteInView(index) {
    currentMovieIndex = index;
    currentAction = "deleteInView";
    document.getElementById('confirmationMessage').innerText = "Are you sure you want to delete this movie?";
    document.getElementById('confirmationModal').style.display = 'block';
}

// Function to perform the confirmed action
function performAction() {
    if (currentAction === "edit") {
        updateMovie();
    } else if (currentAction === "delete") {
        deleteMovie();
    } else if (currentAction === "editInView") {
        closeModal();
        showEditForm(currentMovieIndex);
        closeConfirmationModal();
    } else if (currentAction === "deleteInView") {
        closeModal();
        deleteMovie();
        closeConfirmationModal();
    }
}

// Function to search for movies
function searchMovies() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    if (filteredMovies.length === 0) {
        alert("No movies found!");
        return;
    }
    viewMovie(movies.indexOf(filteredMovies[0]));
}

// Initial rendering of movies
renderMovies();
// Function to show only the movie list and hide the form
function showMovieList() {
    document.getElementById('addMovieFormContainer').style.display = 'none';
    document.getElementById('editMovieFormContainer').style.display = 'none';
    document.getElementById('moviesTable').style.display = 'table';
    document.getElementById('backButton').style.display = 'none';
    document.getElementById('viewAllButton').style.display = 'inline';
}

// Function to show the form and hide the movie list
function showAddMovieForm() {
    document.getElementById('addMovieFormContainer').style.display = 'block';
    document.getElementById('editMovieFormContainer').style.display = 'none';
    document.getElementById('moviesTable').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';
    document.getElementById('viewAllButton').style.display = 'inline';
}

// Function to handle "View All" button click
function viewAll() {
    showMovieList();
}

// Function to handle "Back" button click
function goBack() {
    showAddMovieForm();
}

// Function to initialize page
function initializePage() {
    document.getElementById('moviesTable').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';
    document.getElementById('viewAllButton').style.display = 'inline';
    renderMovies();
}

// Initialize page on load
initializePage();
// Function to show the add movie form
// Function to show the add movie form
function showAddMovieForm() {
    document.getElementById('addMovieFormContainer').style.display = 'block';
    document.getElementById('editMovieFormContainer').style.display = 'none';
    document.getElementById('moviesTable').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';
    document.getElementById('viewAllButton').style.display = 'inline';
    document.getElementById('addMovieButton').style.display = 'none'; // Hide add button if needed
}

// Function to show the movie list
function showMovieList() {
    document.getElementById('addMovieFormContainer').style.display = 'none';
    document.getElementById('editMovieFormContainer').style.display = 'none';
    document.getElementById('moviesTable').style.display = 'table';
    document.getElementById('backButton').style.display = 'inline';
    document.getElementById('viewAllButton').style.display = 'none'; // Hide view all button if needed
}

// Function to handle "View All" button click
function viewAll() {
    showMovieList();
}

// Function to handle "Back" button click
function goBack() {
    showAddMovieForm();
}

