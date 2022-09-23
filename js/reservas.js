const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

async function getBookings(id) {
  try {
    const response = await fetch(`${BASE_URL}/bookings/event/${id}`);
    const bookings = await response.json();

    const table = document.getElementsByTagName("tbody")[0];

    bookings.forEach((booking, index) => {
      const row = `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${booking.owner_name}</td>
          <td>${booking.owner_email}</td>
        </tr>
      `;

      table.insertRow().innerHTML = row;
    });
  } catch (error) {
    console.log(error);
    alert("Ocorreu um erro inesperado. Tente novamente, por favor.");
  }
}

async function getEvent(id) {
  try {
    const response = await fetch(`${BASE_URL}/events/${id}`);
    const event = await response.json();

    document.getElementById(
      "eventName"
    ).innerHTML = `Reservas do ${event.name}`;
  } catch (error) {
    alert("Ocorreu um erro inesperado. Tente novamente, por favor.");
  }
}

if (params.id == undefined) {
  alert("O evento a ser reservado não foi informado.");
  window.location.replace("./admin.html");
} else {
  getEvent(params.id);
  getBookings(params.id);
}
