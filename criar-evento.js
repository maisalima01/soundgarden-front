const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

async function createNewEvent() {
    const request = {
        name:document.querySelector("#nome").value,
        poster: document.querySelector("#banner").value,
        attractions: document.querySelector("#atracoes").value.split(","),
        description:document.querySelector("#descricao").value,
        scheduled: new Date(document.querySelector('input[type="date"]').value).toISOString(),
        number_tickets: document.querySelector("#lotacao").value 
    };
 
    const response = await fetch(`${BASE_URL}/events`,{
        method: "POST",
        body: JSON.stringify(request),
        headers: {
            'Content-type': 'application/json'
        },
    })
    await response.json();
    alert("Evento criado com sucesso!")
    document.location.replace("criar-evento.html")
}

function formatDate(dateObject) //pass date object
{
    let day = dateObject.getDate();
    let month = dateObject.getMonth()+1 ;
  return `${dateObject.getFullYear()}-${month< 10?"0"+month:month}-${day<10?"0"+day:day}`;
}
