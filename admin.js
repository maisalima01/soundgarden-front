const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const tBody = document.querySelector("tbody");

async function getEventos(id) {
  const response = await fetch(`${BASE_URL}/events${id}`, {
    method: "GET",
  });
  const eventos = await response.json();

  eventos.forEach((evento) => {
    const table = `<th scope="row">1</th>
<td>${evento.newDate('scheduled')}</td>
<td>${evento.name}</td>
<td>${evento.attractions}</td>
`;
  });
}
tBody.innerHTML += table;



//contador