const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const main = document.querySelector("main");

function efetuarReserva(id){
const modal = document.querySelector(".modal");

modal.style.display = "block";
}

function fechar(){
    const modal = document.querySelector(".modal");

modal.style.display = "none";
}

const form = ` <div class="modal">
<form class="modal-content">
  <div class="container">
    <h1>Reservar Ingresso</h1>
    <p>Por favor, preencha esse formulário para reservar seu ingresso.</p>
    <hr>
    <label for="name"><b>Nome</b></label>
    <input type="text" placeholder="Digite seu nome" name="name" required>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Digite seu Email" name="email" required>
    <div class="botao">
    <button type="button" onclick="fechar()"
    class="cancel">X</button>
    <button type="submit" class="res">Reservar</button>
  </div>
</div>
</form>
</div>
`
main.innerHTML += form;

const btnRes = document.querySelector(".res");

btnRes.onclick = function () {
    alert("Ingresso reservado com sucesso!");
    fechar();
  };

  async function reservarIngresso() {
    try {
      const response = await fetch(
        `${BASE_URL}/bookings`,
        {
          method: "POST",
        //   const data = {
        //     "owner_name",
        //     "owner_email"

        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

//incluir o body na chamada do fetch

