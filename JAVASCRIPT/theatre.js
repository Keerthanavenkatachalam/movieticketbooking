const showtimesData = {
    mon: [
        {
            cinema: "INOX: Prozone Mall, Coimbatore",
            times: ["03:20 PM", "03:40 PM", "04:15 PM", "06:30 PM", "09:40 PM", "10:00 PM", "10:35 PM"],
            link: "specifictheatre.html"
        },
        {
            cinema: "PVR: Fun Republic Mall, Coimbatore",
            times: ["02:00 PM", "04:30 PM", "07:15 PM", "09:45 PM"],
            link: "specifictheatre.html"
        },
    ],
    tue: [
        {
            cinema: "Sakthi Theater, Coimbatore",
            times: ["01:20 PM", "03:50 PM", "05:15 PM", "07:30 PM", "10:00 PM"],
            link: "specifictheatre.html"
        },
        {
            cinema: "Cinepolis: Brookefields Mall, Coimbatore",
            times: ["12:30 PM", "03:10 PM", "06:45 PM", "08:30 PM", "11:00 PM"],
            link: "specifictheatre.html"
        },
    ],
    wed: [
        {
            cinema: "KVR Theater, Coimbatore",
            times: ["01:20 PM", "03:50 PM", "05:15 PM", "07:30 PM", "10:00 PM"],
            link: "specifictheatre.html"
        },
        {
            cinema: "Tamilnadu Theater, Coimbatore",
            times: ["12:30 PM", "03:10 PM", "06:45 PM", "08:30 PM", "11:00 PM"],
            link: "specifictheatre.html"
        },
    ],
    thu: [
        {
            cinema: "Diamond Theater, Coimbatore",
            times: ["01:20 PM", "03:50 PM", "05:15 PM", "07:30 PM", "10:00 PM"],
            link: "specifictheatre.html"
        },
        {
            cinema: "Universal Theater, Coimbatore",
            times: ["12:30 PM", "03:10 PM", "06:45 PM", "08:30 PM", "11:00 PM"],
            link: "specifictheatre.html"
        },
    ],
};

function showShowtimes(day) {
    const showtimesContainer = document.getElementById('showtimes');
    showtimesContainer.innerHTML = ''; // Clear previous content

    if (showtimesData[day]) {
        showtimesData[day].forEach(cinemaData => {
            let cinemaHTML = `
                <div class="cinema">
                    <div class="cinema-header" onclick="location.href='${cinemaData.link}';">
                        <h2>${cinemaData.cinema}</h2>
                        <span class="info">INFO</span>
                    </div>
                    <div class="showtimes-list">`;

            cinemaData.times.forEach(time => {
                cinemaHTML += `<button class="time available"><a href="seatselection.html">${time}</a></button>`;
            });

            cinemaHTML += `
                    </div>
                    <div class="cancellation">Cancellation Available</div>
                </div>`;
            showtimesContainer.innerHTML += cinemaHTML;
        });
    } else {
        showtimesContainer.innerHTML = '<p>No showtimes available for this date.</p>';
    }
}

// Initial load
showShowtimes('mon');
