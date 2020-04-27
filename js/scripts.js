var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contagemPalpites = 1;
var botaoReinicio;
campoPalpite.focus();

function conferirPalpite() {
  var palpiteUsuario = Number(campoPalpite.value);
  if (contagemPalpites === 1) {
    palpites.textContent = 'Palpites anteriores: ';
  }
  palpites.textContent += palpiteUsuario + ' ';

  if (palpiteUsuario == numeroAleatorio) {
    ultimoResultado.textContent = "Parabéns! Você acertou!";
    ultimoResultado.style.color = "green";
    baixoOuAlto.textContent = "";
    configFimDeJogo();
  } else if (contagemPalpites == 10) {
    ultimoResultado.textContent = "FIM DE JOGO!";
    baixoOuAlto.textContent = "";
    configFimDeJogo();
  } else {
    ultimoResultado.textContent = "Errado!"
    ultimoResultado.style.color = "red";
    if (palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = "Seu palpite está muito baixo!";
    } else if (palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = "Seu palpite está muito alto!"
    }
  }

  contagemPalpites++;
  campoPalpite.value = "";
  campoPalpite.focus();
}

envioPalpite.addEventListener('click', conferirPalpite);

function configFimDeJogo() {
  campoPalpite.disabled = true;
  envioPalpite.disabled = true;
  botaoReinicio = document.createElement('button');
  botaoReinicio.textContent = "Iniciar novo jogo";
  document.querySelector('.reiniciarJogo').appendChild(botaoReinicio);
  botaoReinicio.style.border = "3px solid #5E503F";
  botaoReinicio.style.marginTop = "10px";
  botaoReinicio.style.padding = "5px";
  botaoReinicio.style.backgroundColor = "#C6AC8F";

  botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
  contagemPalpites = 1;

  var reiniciarPartida = document.querySelectorAll('.resultadoPalpites p');
  for (var i = 0; i < reiniciarPartida.length ; i++) {
    reiniciarPartida[i].textContent = "";
  }
  
  campoPalpite.disabled = false;
  envioPalpite.disabled = false;
  campoPalpite.value = "";
  campoPalpite.focus();

  ultimoResultado.style.backgroundColor = '#C6AC8F';

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

