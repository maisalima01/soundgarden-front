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
<form class="modal-content" action="/action_page.php">
  <div class="container">
    <h1>Reservar Ingresso</h1>
    <p>Por favor, preencha esse formulário para reservar seu ingresso.</p>
    <hr>
    <label for="name"><b>Nome</b></label>
    <input type="text" placeholder="Digite seu nome" name="name" required>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Digite seu Email" name="email" required>
    <div class="clearfix">
    <button type="button" onclick="fechar()"
    class="cancelbtn">Fechar</button>
    <button type="submit" class="signup">Reservar</button>
  </div>
</div>
</form>
</div>
`

main.innerHTML += form;


//innerhtml no main
//evento onclick para chamar a função reservar ingresso, criar alert
