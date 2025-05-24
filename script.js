const quizData = [
    {
      question: "Qual desses alimentos é mais rico em vitamina C?",
      options: ["Banana", "Maçã", "Laranja", "Pão"],
      answer: 2
    },
    {
      question: "Quantos minutos de atividade física por dia são recomendados para adultos?",
      options: ["10 minutos", "30 minutos", "1 hora", "2 horas"],
      answer: 1
    },
    {
      question: "Qual é o principal órgão do sistema circulatório?",
      options: ["Cérebro", "Pulmão", "Estômago", "Coração"],
      answer: 3
    },
    {
      question: "Qual destes hábitos contribui para uma boa saúde mental?",
      options: ["Dormir menos de 5 horas", "Exercícios físicos regulares", "Consumo excessivo de cafeína", "Isolamento social"],
      answer: 1
    },
    {
      question: "Qual vitamina é essencial para a saúde óssea?",
      options: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina B12"],
      answer: 2
    }
  ];
  
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
    // Limpa opções anteriores
    optionsContainer.innerHTML = '';
  
    const currentQuestion = shuffledQuestions[currentIndex];
    questionNumberEl.textContent = `Pergunta ${currentIndex + 1} de ${shuffledQuestions.length}`;
    questionTextEl.textContent = currentQuestion.question;
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.className = 'btn btn-outline-primary btn-option';
      button.textContent = option;
      button.addEventListener('click', () => selectAnswer(index));
      optionsContainer.appendChild(button);
    });
  }
  
  function selectAnswer(selectedIndex) {
    const currentQuestion = shuffledQuestions[currentIndex];
    const correctIndex = currentQuestion.answer;
    const buttons = document.querySelectorAll('.btn-option');
  
    buttons.forEach((btn, index) => {
      btn.disabled = true;
      if (index === correctIndex) {
        btn.classList.replace('btn-outline-primary', 'btn-success');
      } else if (index === selectedIndex) {
        btn.classList.replace('btn-outline-primary', 'btn-danger');
      }
    });
  
    if (selectedIndex === correctIndex) score++;
    nextBtn.style.display = 'inline-block';
  }
  
  function showResult() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    finalScoreEl.textContent = `Você acertou ${score} de ${shuffledQuestions.length} perguntas!`;
  }