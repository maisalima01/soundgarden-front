const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const inputNome = document.querySelector("#nome");
const inputBanner = document.querySelector("#banner");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const buttonDelete = document.querySelector(".btn-danger");

//pegando o ID
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

//listando evento pelo id
async function getEvento(id) {
  try {
    const response = await fetch(`${BASE_URL}/events/${id}`, {
      method: "GET",
    });

    const data = await response.json();

    inputNome.value = data.name;
    inputBanner.value = data.poster;
    inputAtracoes.value = data.attractions;
    inputDescricao.value = data.description;
    inputData.value = data.scheduled;
    inputLotacao.value = data.number_tickets;
  } catch (error) {
    console.log(error);
  }
}

if (params.id == undefined) {
  alert("O evento a ser excluído não foi informado.");
  window.location.replace("./eventos.html");
} else {
  getEvento(params.id);
}

//função deletar evento
async function deleteEvento(id) {
  try {
    const response = await fetch(`${BASE_URL}/events/${id}`, {
      method: "DELETE",
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    alert("Ocorreu um erro inesperado. Tente novamente, por favor.");
  }
}

//evento onclick para chamar a função deletar evento, criar alert e redirecionar para página de eventos
buttonDelete.onclick = function () {
  deleteEvento(params.id);
  alert("Evento excluído com sucesso!");
  window.location.replace("./admin.html");
};
