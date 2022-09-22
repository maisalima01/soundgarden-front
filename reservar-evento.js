const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const main = document.querySelector("main");
let idReserva;

function efetuarReserva(id) {
  const modal = document.querySelector(".modal");
  idReserva = id;
  modal.style.display = "block";
}

function fechar() {
  const modal = document.querySelector(".modal");

  modal.style.display = "none";
}

const form = ` <div class="modal">
<form class="modal-content" onsubmit="return validadeForm()">
  <div class="container">
    <h1>Reservar Ingresso</h1>
    <p>Por favor, preencha esse formulário para reservar seu ingresso.</p>
    <hr>
    <label for="name"><b>Nome</b></label>
    <input id="name" type="text" placeholder="Digite seu nome" name="name" required>
    <label for="email"><b>Email</b></label>
    <input id="email" type="text" placeholder="Digite seu Email" name="email" required>
    <div class="botao">
    <button type="button" onclick="fechar()"
    class="cancel">X</button>
    <button type="submit" class="res">Reservar</button>
  </div>
</div>
</form>
</div>
`;
main.innerHTML += form;
const formModal = document.querySelector(".modal-content");

formModal.onsubmit = function () {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  reservarIngresso(name, email);
  alert("Ingresso reservado com sucesso!");
  fechar();
};

async function reservarIngresso(name, email) {
  try {
    const raw = JSON.stringify({
      owner_name: name,
      owner_email: email,
      number_tickets: 1,
      event_id: idReserva,
    });
    const response = await fetch(`${BASE_URL}/bookings`, {
      method: "POST",
      body: raw,
    });
  } catch (error) {
    console.log(error);
    alert("Ocorreu um erro inesperado. Tente novamente, por favor.");
  }
};

