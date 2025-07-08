const eventDetails = [
  {
    id: 1,
    name: "Tech Conference 2025",
    date: "2025-08-15",
    location: "Kigali Convention Center",
    category: "Tech",
    description: "A day-long event full of workshops and networking with tech experts."
  },
  {
    id: 2,
    name: "Music Festival",
    date: "2025-07-25",
    location: "Amahoro Stadium",
    category: "Music",
    description: "Enjoy live African music and food."
  }
];

function showEventDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = parseInt(urlParams.get("id"));
  const event = eventDetails.find(e => e.id === eventId);

  if (!event) return;

  document.getElementById("eventDetails").innerHTML = `
    <h2>${event.name}</h2>
    <p><strong>Date:</strong> ${event.date}</p>
    <p><strong>Location:</strong> ${event.location}</p>
    <p><strong>Category:</strong> ${event.category}</p>
    <p>${event.description}</p>
  `;
}

window.onload = showEventDetail;