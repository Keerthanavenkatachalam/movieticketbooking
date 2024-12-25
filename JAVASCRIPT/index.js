document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        {
            title: 'ELECTION',
            duration: '120 min',
            rating: '8.5/10',
            genre: ['Action'],
            location: ['city1', 'city4'],
            language: ['English'],
            timing: ['Evening'],
            format: ['2D'],
            image: '../IMAGES/recent1.jpg'
        },
        {
            title: 'JOKER',
            duration: '140 min',
            rating: '7.8/10',
            genre: ['Drama'],
            location: ['city2', 'city5'],
            language: ['Hindi'],
            timing: ['Afternoon'],
            format: ['3D'],
            image: '../IMAGES/recent2.jpg'
        },
        {
            title: 'THOR RAGNAROK',
            duration: '130 min',
            rating: '8.2/10',
            genre: ['Drama'],
            location: ['city3', 'city4'],
            language: ['Hindi','English'],
            timing: ['Afternoon','Evening'],
            format: ['3D','2D'],
            image: '../IMAGES/recent3.jpg'
        },
       
    ];

    let selectedFilters = {
        location: [],
        language: [],
        genre: [],
        timing: [],
        format: []
    };

    const movieList = document.querySelector('.movie-list');

    function displayMovies(filteredMovies) {
        movieList.innerHTML = '';
        filteredMovies.forEach(movie => {
            const { title, duration, rating, image } = movie;
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie-item');
            movieElement.innerHTML = `
                <img src="${image}" alt="${title}">
                <div class="movie-info">
                    <h4>${title}</h4>
                    <p>${duration}</p>
                    <p>Rating: ${rating}</p>
                </div>
            `;
            movieList.appendChild(movieElement);
        });
    }

    function filterMovies() {
        const filteredMovies = movies.filter(movie => {
            return (
                (selectedFilters.location.length === 0 || selectedFilters.location.some(loc => movie.location.includes(loc))) &&
                (selectedFilters.language.length === 0 || selectedFilters.language.some(lang => movie.language.includes(lang))) &&
                (selectedFilters.genre.length === 0 || selectedFilters.genre.some(gnr => movie.genre.includes(gnr))) &&
                (selectedFilters.timing.length === 0 || selectedFilters.timing.some(tm => movie.timing.includes(tm))) &&
                (selectedFilters.format.length === 0 || selectedFilters.format.some(fmt => movie.format.includes(fmt)))
            );
        });
        displayMovies(filteredMovies);
    }

    function setupDropdown(dropdownId, filterType) {
        const dropdown = document.getElementById(dropdownId);
        dropdown.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const value = e.target.getAttribute('data-value');
                const isSelected = e.target.classList.contains('selected');

                if (isSelected) {
                    selectedFilters[filterType] = selectedFilters[filterType].filter(item => item !== value);
                    e.target.classList.remove('selected');
                } else {
                    selectedFilters[filterType].push(value);
                    e.target.classList.add('selected');
                }

                filterMovies();
            });
        });
    }

    setupDropdown('genre-dropdown', 'genre');
    setupDropdown('format-dropdown', 'format');
    setupDropdown('location-dropdown', 'location');
    setupDropdown('language-dropdown', 'language');
    setupDropdown('timing-dropdown', 'timing');

    // Initial display
    displayMovies(movies);
});


