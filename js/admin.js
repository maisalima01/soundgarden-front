const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

async function getEvents(){
  try {
    const response = await fetch(`${BASE_URL}/events`)
    const events = await response.json();

    const tbody = document.getElementsByTagName('tbody')[0];

    // preencher o HTML com os dados dos eventos.
    events.forEach((event, index) => {
      const row = `
        <tr>
          <th scope="row">${index+1}</th>
          <td>${new Date(event.scheduled).toLocaleString('pt-BR')}</td>
          <td>${event.name}</td>
          <td>${event.attractions.join(', ')}</td>
          <td>
            <a href="reservas.html?id=${event._id}" class="btn btn-dark">ver reservas</a>
            <a href="editar-evento.html?id=${event._id}" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html?id=${event._id}" class="btn btn-danger">excluir</a>
          </td>
        </tr>
      `

      tbody.insertRow().innerHTML = row;
    })
  } catch (error) {
    console.log(error);
    alert("Ocorreu um erro inesperado. Tente novamente, por favor.");
  }
}

getEvents();

