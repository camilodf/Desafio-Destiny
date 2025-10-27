const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

// clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  // gerar numero aletorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  // sumir a resposta depois de 3 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}

const backgroundMusic = document.getElementById("backgroundMusic");
const toggleMusicBtn = document.getElementById("toggleMusic");

// Garante que o áudio esteja baixo e suave
backgroundMusic.volume = 0.2;

// Alterna entre tocar e pausar
toggleMusicBtn.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    toggleMusicBtn.textContent = "🔊";
  } else {
    backgroundMusic.pause();
    toggleMusicBtn.textContent = "🔇";
  }
});

toggleMusicBtn.classList.toggle("active");
