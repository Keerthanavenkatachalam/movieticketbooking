// Data for each date's showtimes
const showtimesData = {
    "MON 29 JUL": [
        { title: "Twisters (UA)", info: "English, 2D", times: ["09:30 PM"] },
        { title: "Raayan (A)", info: "Tamil, 2D", times: ["09:40 PM", "10:00 PM", "10:35 PM"] },
        { title: "Deadpool & Wolverine (A)", info: "English, 3D", times: ["10:00 PM", "10:30 PM"] },
        { title: "Deadpool & Wolverine (A)", info: "Tamil, 3D", times: ["10:15 PM"] },
        { title: "Kalki 2898 AD (UA)", info: "Tamil, 3D", times: ["10:20 PM"] },
        { title: "Kill (A)", info: "English, 3D", times: ["11:05 PM"] },
    ],
    "TUE 30 JUL": [
        
        { title: "Raayan (A)", info: "Tamil, 2D", times: ["07:40 PM", "09:00 PM", "09:35 PM"] },
        { title: "Deadpool & Wolverine (A)", info: "English, 3D", times: ["08:00 PM", "08:30 PM"] },
        { title: "Deadpool & Wolverine (A)", info: "Tamil, 3D", times: ["08:15 PM"] },
        { title: "Kalki 2898 AD (UA)", info: "Tamil, 3D", times: ["08:20 PM"] },
        { title: "Kill (A)", info: "English, 3D", times: ["09:05 PM"] },
    ],
    "WED 31 JUL": [
        
        { title: "Raayan (A)", info: "Tamil, 2D", times: ["06:40 PM", "08:00 PM", "08:35 PM"] },
        { title: "Deadpool & Wolverine (A)", info: "English, 3D", times: ["07:00 PM", "07:30 PM"] },
        { title: "Deadpool & Wolverine (A)", info: "Tamil, 3D", times: ["07:15 PM"] },
        { title: "Kalki 2898 AD (UA)", info: "Tamil, 3D", times: ["07:20 PM"] },
        
    ]
};

// Function to update the showtimes based on selected date
function updateShowtimes(selectedDate) {
    const showtimesContainer = document.querySelector('.showtimes');
    showtimesContainer.innerHTML = ''; // Clear previous showtimes

    if (showtimesData[selectedDate]) {
        showtimesData[selectedDate].forEach(show => {
            let showHTML = `
                <div class="show">
                    <div>
                        <p class="title">${show.title}</p>
                        <p class="info">${show.info}</p>
                    </div>
                    <div class="times">`;
            show.times.forEach(time => {
                showHTML += `<span><a href="seatselection.html">${time}</a></span>`;
            });
            showHTML += `
                    </div>
                </div>`;
            showtimesContainer.innerHTML += showHTML;
        });
    } else {
        showtimesContainer.innerHTML = '<p>No showtimes available for this date.</p>';
    }
}

// Add event listeners to the date buttons
document.querySelectorAll('.details .date').forEach(dateElement => {
    dateElement.addEventListener('click', function () {
        // Remove 'selected' class from all date elements
        document.querySelectorAll('.details .date').forEach(elem => elem.classList.remove('selected'));

        // Add 'selected' class to the clicked date element
        this.classList.add('selected');

        // Update showtimes based on the selected date
        updateShowtimes(this.textContent.trim());
    });
});

// Initial load of showtimes for the first date
updateShowtimes("MON 29 JUL");
