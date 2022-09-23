async function getEvents(){
  try {
    const response = await fetch(`${BASE_URL}/events`)
    const events = await response.json();
    
    const eventsContainer = document.querySelector('#eventsContainer');

    let allElements = "";
    // preencher o HTML com os dados dos eventos.
    events.forEach((event, index) => {
        
      allElements +=   `
      <article class="evento card p-5 m-3">
        <h2>${event.name} - ${formatDate(new Date(event.scheduled))}</h2>
        <h4>${event.attractions.join(",")}</h4>
        <p>${event.description}</p>
        <a onclick="efetuarReserva('${event._id}')"href="#" class="btn btn-primary">reservar ingresso</a>
    </article>
      `
    })

    eventsContainer.innerHTML = allElements;
  } catch (error) {
    alert("Ocorreu um erro inesperado. Tente novamente, por favor.");
  }
}

function formatDate(dateObject) //pass date object
{
  return `${dateObject.getDate()}/${dateObject.getMonth()+1}/${dateObject.getFullYear()}`;
}

getEvents();

