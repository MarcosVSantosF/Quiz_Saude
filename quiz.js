  function getPerguntasAleatorias(total) {
  const copia = [...quizDataOriginal];
  const selecionadas = [];

  for (let i = 0; i < total && copia.length > 0; i++) {
    const index = Math.floor(Math.random() * copia.length);
    selecionadas.push(copia.splice(index, 1)[0]);
  }

  return selecionadas;
  }
  
  
  const quizData = getPerguntasAleatorias(10);

  let shuffledQuestions = [];
  let currentIndex = 0;
  let score = 0;
  
  const startBtn = document.getElementById('start-btn');
  const restartBtn = document.getElementById('restart-btn');
  const startScreen = document.getElementById('start-screen');
  const quizScreen = document.getElementById('quiz-screen');
  const resultScreen = document.getElementById('result-screen');
  const questionNumberEl = document.getElementById('question-number');
  const questionTextEl = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options');
  const nextBtn = document.getElementById('next-btn');
  const finalScoreEl = document.getElementById('final-score');
  
  startBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < shuffledQuestions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  restartBtn.addEventListener('click', () => {
    window.location.reload();
  });
  
  function startQuiz() {
    // Embaralha as perguntas
    shuffledQuestions = quizData.sort(() => Math.random() - 0.5);
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    currentIndex = 0;
    score = 0;
    loadQuestion();
  }
  
  function loadQuestion() {
  nextBtn.style.display = 'none';
  optionsContainer.innerHTML = '';

  const currentQuestion = shuffledQuestions[currentIndex];
  questionNumberEl.textContent = `Pergunta ${currentIndex + 1} de ${shuffledQuestions.length}`;
  questionTextEl.textContent = currentQuestion.pergunta;

  const letras = ['a', 'b', 'c', 'd'];
  let index = 0;

  for (let letra of letras) {
    const button = document.createElement('button');
    button.className = 'btn btn-outline-primary btn-option';
    button.textContent = currentQuestion.alternativas[letra];
    button.addEventListener('click', () => selectAnswer(letra));
    optionsContainer.appendChild(button);
    index++;
    };
  }
  
  function selectAnswer(selectedLetter) {
  const currentQuestion = shuffledQuestions[currentIndex];
  const correctLetter = currentQuestion.resposta_certa;
  const buttons = document.querySelectorAll('.btn-option');

  buttons.forEach((btn, index) => {
    const letra = ['a', 'b', 'c', 'd'][index];
    btn.disabled = true;

    if (letra === correctLetter) {
      btn.classList.replace('btn-outline-primary', 'btn-success');
    } else if (letra === selectedLetter) {
      btn.classList.replace('btn-outline-primary', 'btn-danger');
    }
  });

  if (selectedLetter === correctLetter) score++;
  nextBtn.style.display = 'inline-block';
  }
  
  function showResult() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    finalScoreEl.textContent = `Você acertou ${score} de ${shuffledQuestions.length} perguntas!`;
  }