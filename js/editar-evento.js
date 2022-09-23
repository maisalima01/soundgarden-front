const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

let idEvento = location.search.replace("?", "").split("=")[1] ?? null;

if (!idEvento) {
  document.location.replace("/");
}

async function getEventById() {
  try {
    const response = await fetch(`${BASE_URL}/events/${idEvento}`);
    const event = await response.json();

    document.querySelector("#nome").value = event.name;
    document.querySelector("#banner").value = event.poster;
    document.querySelector("#atracoes").value = event.attractions.join(",");
    document.querySelector("#descricao").value = event.description;
    document.querySelector("#dataEvento").value = formatDate(
      new Date(event.scheduled)
    );
    console.log(formatDate(new Date(event.scheduled)));
    document.querySelector("#lotacao").value = event.number_tickets;
  } catch (error) {
    console.log(error);
    alert("Ocorreu um erro inesperado. Tente novamente, por favor.");
  }
}

async function editEvent() {
  try {
    const request = {
      name: document.querySelector("#nome").value,
      poster: document.querySelector("#banner").value,
      attractions: document.querySelector("#atracoes").value.split(","),
      description: document.querySelector("#descricao").value,
      scheduled: new Date(
        document.querySelector('input[type="date"]').value
      ).toISOString(),
      number_tickets: document.querySelector("#lotacao").value,
    };

    const response = await fetch(`${BASE_URL}/events/${idEvento}`, {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-type": "application/json",
      },
    });
    await response.json();
    alert("Evento editado com sucesso!");
    window.location.replace("./admin.html");
  } catch (error) {
    console.log(error);
    alert("Ocorreu um erro inesperado. Tente novamente, por favor.");
  }
}

function formatDate(dateObject) {
  //pass date object
  let day = dateObject.getDate();
  let month = dateObject.getMonth() + 1;
  return `${dateObject.getFullYear()}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
}

getEventById();
