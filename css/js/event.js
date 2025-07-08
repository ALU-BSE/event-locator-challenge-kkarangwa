const events = [
  {
    id: 1,
    name: "Tech Conference 2025",
    date: "2025-08-15",
    location: "Kigali Convention Center",
    category: "Tech",
    description: "A tech-focused gathering of startups and investors."
  },
  {
    id: 2,
    name: "Music Festival",
    date: "2025-07-25",
    location: "Amahoro Stadium",
    category: "Music",
    description: "Live performances from top African artists."
  }
];

function renderEvents(filteredEvents) {
  const eventList = document.getElementById("eventList");
  eventList.innerHTML = "";

  filteredEvents.forEach(event => {
    eventList.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text"><strong>Date:</strong> ${event.date}</p>
            <p class="card-text"><strong>Location:</strong> ${event.location}</p>
            <p class="card-text">${event.description}</p>
            <a href="event-details.html?id=${event.id}" class="btn btn-outline-primary w-100">View Details</a>
          </div>
        </div>
      </div>
    `;
  });
}

function filterEvents() {
  const url = new URL(window.location.href);
  const query = url.searchParams.get("query")?.toLowerCase() || "";
  const date = url.searchParams.get("date");
  const category = url.searchParams.get("category");

  let filtered = events.filter(e =>
    e.name.toLowerCase().includes(query) ||
    e.location.toLowerCase().includes(query)
  );

  if (date) filtered = filtered.filter(e => e.date === date);
  if (category) filtered = filtered.filter(e => e.category === category);

  renderEvents(filtered);
}

window.onload = filterEvents;