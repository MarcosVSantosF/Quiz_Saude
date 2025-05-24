const quizData = [
    {
      question: "O que é uma Unidade Básica de Saúde (UBS)?",
      options: ["Um hospital especializado", "Um centro de urgência e emergência", "A porta de entrada preferencial do SUS", "Um consultório particular"],
      answer: 2
    },
    {
      question: "Qual é a principal função da UBS?",
      options: ["Realizar cirurgias de alta complexidade", "Fornecer medicamentos de uso contínuo", "Prestar atendimento ambulatorial e ações de prevenção e promoção da saúde", "Oferecer atendimentos especializados"],
      answer: 2
    },
    {
      question: "Qual profissional faz parte obrigatoriamente da equipe da Estratégia Saúde da Família (ESF)",
      options: ["Psicólogo", "Fisioterapeuta", "Agente Comunitário de Saúde", "Técnico de enfermagem"],
      answer: 2
    },
    {
      question: "As UBS fazem parte de qual nível de atenção à saúde no SUS?",
      options: ["Atenção básica", "Atenção especializada", "Atenção hospitalar", "Atenção de urgência de Emergência"],
      answer: 0
    },
    {
      question: "Quais ações fazem parte da Atenção Básica prestada pela UBS?",
      options: ["Internações hospitalares", "Promoção da saúde, prevenção de doenças e reabilitação", "Atendimento de alta complexidade", "Cirurgias eletivas"],
      answer: 1
    },
    {
      question: "Como é chamada a política que organiza os serviços da Atenção Básica no Brasil?",
      options: [
        "Política Nacional de Saúde Mental",
        "Política Nacional de Atenção Hospitalar",
        "Política Nacional de Atenção Básica (PNAB)",
        "Política de Medicamentos Essenciais"
      ],
      answer: 2
    },
    {
      question: "Qual desses é um princípio do Sistema Único de Saúde (SUS) presente na atuação das UBS?",
      options: [
        "Privatização",
        "Universalidade",
        "Exclusividade",
        "Regionalização"
      ],
      answer: 1
    },
    {
      question: "Quem pode ser atendido em uma UBS?",
      options: [
        "Somente gestantes e crianças",
        "Apenas quem possui plano de saúde",
        "Todos os cidadãos, de forma gratuita",
        "Apenas moradores da zona urbana"
      ],
      answer: 2
    },
    {
      question: "O que é acolhimento nas UBS?",
      options: [
        "Atendimento apenas com hora marcada",
        "Uma triagem feita apenas por médicos",
        "Uma prática de escuta qualificada para organizar o fluxo de atendimento",
        "Atendimento exclusivo para pacientes graves"
      ],
      answer: 2
    },
    {
      question: "Qual instrumento ajuda a UBS a conhecer melhor a realidade de saúde da comunidade que atende?",
      options: [
        "Censo Demográfico",
        "Diagnóstico Clínico",
        "Mapa de Risco",
        "Diagnóstico Situacional de Saúde"
      ],
      answer: 3
    },
    {
      question: "O que significa UBS?",
      options: [
        "Unidade de Bem-Estar Social",
        "Unidade Básica de Saúde",
        "Unidade Brasileira de Saúde",
        "União de Benefícios da Saúde"
      ],
      answer: 1
    },
    {
      question: "Quem pode ser atendido na UBS?",
      options: [
        "Apenas crianças",
        "Somente quem tem plano de saúde",
        "Qualquer pessoa",
        "Somente idosos"
      ],
      answer: 2
    },
    {
      question: "O que os profissionais da UBS fazem?",
      options: [
        "Vendem medicamentos",
        "Ajudam a cuidar da saúde da comunidade",
        "Fazem apenas exames de sangue",
        "Aplicam vacinas apenas em bebês"
      ],
      answer: 1
    },
    {
      question: "Qual dessas ações faz parte da UBS?",
      options: [
        "Vacinação",
        "Cirurgias de coração",
        "Internações longas",
        "Exames de ressonância magnética"
      ],
      answer: 0
    },
    {
      question: "Quem visita as casas para conversar sobre saúde?",
      options: [
        "Dentista",
        "Enfermeiro-chefe",
        "Agente Comunitário de Saúde",
        "Recepcionista da UBS"
      ],
      answer: 2
    },
    {
      question: "A PNAB (Política Nacional de Atenção Básica) estabelece diretrizes para:",
      options: [
        "Saúde indígena",
        "Pronto atendimento",
        "Atenção Básica no SUS",
        "Cirurgias eletivas"
      ],
      answer: 2
    },
    {
      question: "A principal estratégia para reorganizar a Atenção Básica no Brasil é:",
      options: [
        "Programa Mais Médicos",
        "Estratégia Saúde da Família (ESF)",
        "Rede Cegonha",
        "SAMU 192"
      ],
      answer: 1
    },
    {
      question: "O território de atuação da UBS é dividido com base em:",
      options: [
        "Faixa etária dos pacientes",
        "Critério populacional e geográfico",
        "Tipos de doenças prevalentes",
        "Capacidade financeira da população"
      ],
      answer: 1
    },
    {
      question: "O acolhimento nas UBS deve:",
      options: [
        "Ser feito apenas por médicos",
        "Seguir um protocolo rígido de fila",
        "Ser resolutivo, com escuta qualificada",
        "Priorizar sempre os agendamentos"
      ],
      answer: 2
    },
    {
      question: "A vigilância em saúde na UBS serve para:",
      options: [
        "Apenas notificar doenças graves",
        "Controlar estoque de medicamentos",
        "Integrar ações de prevenção, promoção e controle de agravos",
        "Fazer campanhas publicitárias"
      ],
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