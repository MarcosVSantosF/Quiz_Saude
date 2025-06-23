

const quizDataOriginal = [


  {
    "pergunta": "Qual é a principal função da sala de vacina na UBS?",
    "alternativas": {
      "a": "Promover a imunização da população",
      "b": "Realizar consultas médicas",
      "c": "Fazer exames laboratoriais",
      "d": "Encaminhar pacientes para o hospital"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "A caderneta de vacinação deve ser apresentada:",
    "alternativas": {
      "a": "Apenas na primeira dose de vacina",
      "b": "Somente para crianças",
      "c": "Sempre que for se vacinar",
      "d": "Apenas quando solicitado pelo enfermeiro"
    },
    "resposta_certa": "c"
  },
  {
    "pergunta": "Qual vacina é administrada ao nascer, ainda na maternidade?",
    "alternativas": {
      "a": "Pentavalente",
      "b": "BCG e Hepatite B",
      "c": "Tríplice Viral",
      "d": "DTP"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "A vacina contra HPV é indicada para:",
    "alternativas": {
      "a": "Meninas e meninos de 9 a 14 anos",
      "b": "Homens acima de 40 anos",
      "c": "Apenas mulheres grávidas",
      "d": "Apenas crianças até 5 anos"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "Qual é a via de administração da vacina BCG?",
    "alternativas": {
      "a": "Intramuscular",
      "b": "Oral",
      "c": "Intradérmica",
      "d": "Subcutânea"
    },
    "resposta_certa": "c"
  },
  {
    "pergunta": "Após abrir um frasco multidoses de vacina, o profissional deve:",
    "alternativas": {
      "a": "Usar até acabar, sem prazo",
      "b": "Respeitar o prazo de validade pós-abertura e conservar adequadamente",
      "c": "Jogar fora em 24 horas",
      "d": "Aplicar apenas em crianças"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "O que deve ser feito em caso de recusa vacinal?",
    "alternativas": {
      "a": "Ignorar e não registrar",
      "b": "Obrigar o paciente a se vacinar",
      "c": "Registrar em prontuário e orientar o usuário sobre os riscos da não vacinação",
      "d": "Encaminhar para o hospital"
    },
    "resposta_certa": "c"
  },
  {
    "pergunta": "Qual profissional é responsável por supervisionar a sala de vacina?",
    "alternativas": {
      "a": "Técnico de enfermagem",
      "b": "Enfermeiro",
      "c": "Médico clínico",
      "d": "Agente comunitário"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "A vacina tríplice viral protege contra:",
    "alternativas": {
      "a": "Poliomielite, hepatite e tétano",
      "b": "Sarampo, rubéola e varicela",
      "c": "Sarampo, caxumba e rubéola",
      "d": "Caxumba, coqueluche e tétano"
    },
    "resposta_certa": "c"
  },
  {
    "pergunta": "Qual o procedimento correto após administrar uma vacina?",
    "alternativas": {
      "a": "Jogar seringa no lixo comum",
      "b": "Não registrar a dose aplicada",
      "c": "Registrar a vacina no sistema e orientar sobre possíveis reações",
      "d": "Liberar o paciente sem anotações"
    },
    "resposta_certa": "c"
  },
  {
    "pergunta": "Qual é a temperatura ideal para conservação das vacinas?",
    "alternativas": {
      "a": "De -2°C a 2°C",
      "b": "De +2°C a +8°C",
      "c": "De 0°C a +10°C",
      "d": "De -10°C a 0°C"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "A vacina DTP protege contra quais doenças?",
    "alternativas": {
      "a": "Hepatite, meningite e sarampo",
      "b": "Sarampo, rubéola e varicela",
      "c": "Difteria, tétano e coqueluche",
      "d": "Poliomielite, tétano e febre amarela"
    },
    "resposta_certa": "c"
  },
  {
    "pergunta": "A via de administração da vacina contra febre amarela é:",
    "alternativas": {
      "a": "Intradérmica",
      "b": "Subcutânea",
      "c": "Oral",
      "d": "Intramuscular"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "A vacina oral contra poliomielite é conhecida como:",
    "alternativas": {
      "a": "BCG",
      "b": "DTP",
      "c": "VOP",
      "d": "VIP"
    },
    "resposta_certa": "c"
  },
  {
    "pergunta": "A vacina VIP (poliomielite inativada) é aplicada por via:",
    "alternativas": {
      "a": "Oral",
      "b": "Subcutânea",
      "c": "Intramuscular",
      "d": "Intradérmica"
    },
    "resposta_certa": "c"
  },
  
  {
    "pergunta": "O que deve ser feito antes de aplicar qualquer vacina?",
    "alternativas": {
      "a": "Apenas aplicar",
      "b": "Conferir o número de doses do frasco",
      "c": "Conferir nome, validade, via, aspecto e registro no sistema",
      "d": "Perguntar se o paciente quer todas as vacinas de uma vez"
    },
    "resposta_certa": "c"
  },
  {
    "pergunta": "Qual vacina é contraindicada para gestantes?",
    "alternativas": {
      "a": "Tríplice viral",
      "b": "Influenza",
      "c": "dT (dupla adulto)",
      "d": "Hepatite B"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "A técnica correta para administração de vacina intramuscular em adulto é no músculo:",
    "alternativas": {
      "a": "Deltóide ou glúteo médio",
      "b": "Abdome",
      "c": "Deltóide",
      "d": "Vasto lateral da coxa"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "A caderneta de vacinação é um documento:",
    "alternativas": {
      "a": "Opcional",
      "b": "Obrigatório e individual",
      "c": "Compartilhado por famílias",
      "d": "Exigido apenas para crianças"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "A vacina contra influenza é oferecida na UBS anualmente para:",
    "alternativas": {
      "a": "Somente crianças",
      "b": "Apenas idosos",
      "c": "Grupos prioritários definidos pelo Ministério da Saúde",
      "d": "Quem pedir"
    },
    "resposta_certa": "c"
  },
  {
    "pergunta": "Em caso de reação adversa grave pós-vacinação, o profissional deve:",
    "alternativas": {
      "a": "Ignorar se não for grave",
      "b": "Administrar outra vacina",
      "c": "Notificar no sistema de eventos adversos (SI-EAPV)",
      "d": "Solicitar a presença do médico"
    },
    "resposta_certa": "c"
  },
  {
    "pergunta": "A vacina rotavírus é contraindicada em crianças com:",
    "alternativas": {
      "a": "Tosse leve",
      "b": "Febre baixa",
      "c": "História de invaginação intestinal",
      "d": "Uso de antibiótico"
    },
    "resposta_certa": "c"
  },
  {
    "pergunta": "Qual dessas vacinas é administrada por via oral?",
    "alternativas": {
      "a": "Hepatite A",
      "b": "Rotavírus",
      "c": "Tríplice viral",
      "d": "Meningocócica"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "O frasco de vacina que ultrapassou a validade pós-abertura deve ser:",
    "alternativas": {
      "a": "Reutilizado",
      "b": "Descartado imediatamente",
      "c": "Guardado em temperatura ambiente",
      "d": "Reencaminhado ao laboratório"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "A vacina meningocócica C é indicada para prevenção de:",
    "alternativas": {
      "a": "Coqueluche",
      "b": "Meningite causada por Neisseria meningitidis",
      "c": "Sarampo",
      "d": "Varicela"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "Qual agulha é mais indicada para aplicação de vacinas intramusculares em adultos?",
    "alternativas": {
      "a": "13x0,45 mm (13 mm)",
      "b": "25x0,7 mm (25 mm)",
      "c": "30x0,3 mm (30 mm)",
      "d": "38x1,2 mm (38 mm)"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "O descarte correto da agulha deve ser feito:",
    "alternativas": {
      "a": "Em sacos plásticos comuns",
      "b": "No lixo reciclável",
      "c": "Em caixa descartável rígida, resistente a perfurocortantes (descarpack)",
      "d": "No vaso sanitário"
    },
    "resposta_certa": "c"
  },
  {
    "pergunta": "As agulhas de maior calibre (ex: 30x0,8 mm) são indicadas para:",
    "alternativas": {
      "a": "Aplicações intradérmicas",
      "b": "Administração de medicações oleosas",
      "c": "Vacinas em bebês",
      "d": "Coleta capilar"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "É permitido reencapar agulhas após o uso?",
    "alternativas": {
      "a": "Sim, se for com cuidado",
      "b": "Não, nunca se deve reencapar agulhas após o uso",
      "c": "Sim, se for com luva estétil",
      "d": "Somente em casos de emergência"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "Qual é o valor considerado normal para a pressão arterial em um adulto saudável?",
    "alternativas": {
      "a": "120 x 80 mmHg",
      "b": "140 x 90 mmHg",
      "c": "130 x 100 mmHg",
      "d": "110 x 50 mmHg"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "A pressão arterial é a força que o sangue exerce sobre:",
    "alternativas": {
      "a": "As paredes das artérias",
      "b": "O cérebro",
      "c": "As veias",
      "d": "O coração"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "A aferição da pressão arterial deve ser feita com o paciente:",
    "alternativas": {
      "a": "Sentado, em repouso e com o braço na altura do coração",
      "b": "Após exercício físico",
      "c": "Em pé e falando normalmente",
      "d": "Com o braço suspenso acima da cabeça"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "Qual equipamento é usado para aferir a pressão arterial manualmente?",
    "alternativas": {
      "a": "Esfigmomanômetro e estetoscópio",
      "b": "Termômetro e oxímetro",
      "c": "Balança digital",
      "d": "Estetoscópio e otoscópio"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "A pressão arterial sistólica corresponde ao momento em que:",
    "alternativas": {
      "a": "O coração se contrai",
      "b": "O coração relaxa",
      "c": "O sangue sai das veias",
      "d": "O paciente respira"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "A hipertensão arterial é diagnosticada quando os valores são iguais ou superiores a:",
    "alternativas": {
      "a": "140 x 90 mmHg",
      "b": "130 x 85 mmHg",
      "c": "120 x 80 mmHg",
      "d": "110 x 70 mmHg"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "Qual desses fatores pode elevar a pressão arterial?",
    "alternativas": {
      "a": "Estresse e consumo excessivo de sal",
      "b": "Sono profundo",
      "c": "Hidratação adequada",
      "d": "Jejum prolongado"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "Qual braço deve ser utilizado para aferir a PA?",
    "alternativas": {
      "a": "Preferencialmente o braço com maior valor na primeira aferição",
      "b": "Apenas o esquerdo",
      "c": "Apenas o direito",
      "d": "Sempre o braço dominante"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "Em qual situação a pressão arterial pode estar falsamente baixa?",
    "alternativas": {
      "a": "Braçadeira muito larga",
      "b": "Paciente em repouso",
      "c": "Uso de estetoscópio eletrônico",
      "d": "Braçadeira no braço dominante"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "Qual é o intervalo recomendado entre duas medições consecutivas da PA?",
    "alternativas": {
      "a": "1 a 2 minutos",
      "b": "1 minuto",
      "c": "10 minutos",
      "d": "30 segundos"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "O que é diabetes mellitus?",
    "alternativas": {
      "a": "Uma doença crônica caracterizada pelo aumento da glicose no sangue",
      "b": "Uma infecção causada por vírus",
      "c": "Uma doença autoimune transmissível",
      "d": "Uma inflamação nas artérias"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "Qual o hormônio responsável por controlar os níveis de glicose no sangue?",
    "alternativas": {
      "a": "Insulina",
      "b": "Glucagon",
      "c": "Adrenalina",
      "d": "Cortisol"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "Um valor de glicemia em jejum igual ou superior a qual número pode indicar diabetes?",
    "alternativas": {
      "a": "126 mg/dL",
      "b": "100 mg/dL",
      "c": "80 mg/dL",
      "d": "90 mg/dL"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "Qual é o exame mais usado na UBS para triagem de diabetes?",
    "alternativas": {
      "a": "Glicemia capilar ou glicemia em jejum",
      "b": "Hemograma completo",
      "c": "Eletrocardiograma",
      "d": "Gasometria"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "Quais são sintomas comuns do diabetes não controlado?",
    "alternativas": {
      "a": "Sede excessiva, urina frequente e perda de peso",
      "b": "Sonolência, febre e coceira",
      "c": "Tontura, vômito e tosse",
      "d": "Dor muscular, febre e cansaço"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "Qual é o tipo de diabetes mais comum em adultos?",
    "alternativas": {
      "a": "Tipo 2",
      "b": "Tipo 1",
      "c": "Gestacional",
      "d": "Tipo 3"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "O diabetes tipo 1 geralmente aparece:",
    "alternativas": {
      "a": "Em idosos",
      "b": "Durante a gravidez",
      "c": "Após os 60 anos",
      "d": "Na infância ou adolescência"
    },
    "resposta_certa": "d"
  },
  {
    "pergunta": "Qual desses alimentos deve ser consumido com moderação por diabéticos?",
    "alternativas": {
      "a": "Doces, massas e refrigerantes",
      "b": "Verduras e legumes",
      "c": "Carnes magras e ovos",
      "d": "Castanhas e sementes"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "Um paciente com diabetes deve verificar a glicemia:",
    "alternativas": {
      "a": "Apenas no hospital",
      "b": "Só quando sentir sintomas",
      "c": "Uma vez por mês",
      "d": "Regularmente, conforme orientação da equipe de saúde"
    },
    "resposta_certa": "d"
  },
  {
    "pergunta": "Qual complicação é comum em pessoas com diabetes mal controlado?",
    "alternativas": {
      "a": "Sinusite",
      "b": "Asma",
      "c": "Cálculo renal",
      "d": "Pé diabético, problemas renais e retinopatia"
    },
    "resposta_certa": "d"
  },
  {
    "pergunta": "A tuberculose é causada por qual agente infeccioso?",
    "alternativas": {
      "a": "Vírus da gripe",
      "b": "Fungos pulmonares",
      "c": "Streptococcus pneumoniae",
      "d": "Mycobacterium tuberculosis (bacilo de Koch)"
    },
    "resposta_certa": "d"
  },
  {
    "pergunta": "A forma mais comum da tuberculose é:",
    "alternativas": {
      "a": "Pulmonar",
      "b": "Ganglionar",
      "c": "Óssea",
      "d": "Cutânea"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "Principal sintoma da tuberculose pulmonar:",
    "alternativas": {
      "a": "Tosse com secreção clara por 1 dia",
      "b": "Dor abdominal",
      "c": "Febre apenas noturna",
      "d": "Tosse persistente por mais de 3 semanas, podendo ter sangue"
    },
    "resposta_certa": "d"
  },
  {
    "pergunta": "A transmissão da tuberculose ocorre por:",
    "alternativas": {
      "a": "Contato com o sangue do infectado",
      "b": "Água e alimentos contaminados",
      "c": "Relação sexual desprotegida",
      "d": "Inalação de gotículas eliminadas pela tosse ou fala do doente"
    },
    "resposta_certa": "d"
  },
  {
    "pergunta": "Exame inicial mais utilizado na UBS para investigar tuberculose:",
    "alternativas": {
      "a": "Hemograma",
      "b": "Eletrocardiograma",
      "c": "Dosagem de glicemia",
      "d": "Baciloscopia de escarro"
    },
    "resposta_certa": "d"
  },
  {
    "pergunta": "O tratamento da tuberculose dura, em geral:",
    "alternativas": {
      "a": "10 dias",
      "b": "1 mês",
      "c": "1 ano",
      "d": "6 meses"
    },
    "resposta_certa": "d"
  },
  {
    "pergunta": "Qual vacina é usada para prevenir formas graves de tuberculose em crianças?",
    "alternativas": {
      "a": "Hepatite B",
      "b": "Tríplice viral",
      "c": "DTP",
      "d": "BCG"
    },
    "resposta_certa": "d"
  },
  {
    "pergunta": "O que é o tratamento diretamente observado (TDO)?",
    "alternativas": {
      "a": "Uso de antibióticos por conta própria",
      "b": "Aplicação de injeções na UBS",
      "c": "Internação hospitalar obrigatória",
      "d": "Acompanhamento do paciente pela equipe de saúde para garantir a adesão ao tratamento"
    },
    "resposta_certa": "d"
  },
  {
    "pergunta": "A tuberculose tem cura?",
    "alternativas": {
      "a": "Não, apenas controle",
      "b": "Só em crianças",
      "c": "Apenas com cirurgia",
      "d": "Sim, com tratamento completo e correto"
    },
    "resposta_certa": "d"
  },
  {
    "pergunta": "A notificação de caso confirmado de tuberculose é:",
    "alternativas": {
      "a": "Opcional",
      "b": "Apenas se houver internação",
      "c": "Feita apenas pelo hospital",
      "d": "Obrigatória e imediata no SUS"
    },
    "resposta_certa": "d"
  },
  {
    "pergunta": "A vacina tríplice viral (SCR) protege contra:",
    "alternativas": {
      "a": "Sarampo, caxumba e rubéola",
      "b": "Rubéola, caxumba e poliomielite",
      "c": "Hepatite A, B e C",
      "d": "Difteria, tétano e sarampo"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "A vacina DTP (tríplice bacteriana) previne:",
    "alternativas": {
      "a": "Difteria, tétano e coqueluche",
      "b": "Dengue, tétano e poliomielite",
      "c": "Sarampo, rubéola e caxumba",
      "d": "Hepatite B, tétano e pneumonia"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "A vacina contra HPV previne principalmente:",
    "alternativas": {
      "a": "Câncer de mama",
      "b": "HIV e sífilis",
      "c": "Varicela",
      "d": "Câncer do colo do útero e verrugas genitais"
    },
    "resposta_certa": "d"
  },
  {
    "pergunta": "A vacina Hepatite B previne qual doença?",
    "alternativas": {
      "a": "Cirrose alcoólica",
      "b": "Infecção viral no fígado transmitida por sangue ou relações sexuais",
      "c": "Diabetes",
      "d": "Anemia"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "A vacina VIP/VOP protege contra qual doença?",
    "alternativas": {
      "a": "Coqueluche",
      "b": "Poliomielite (paralisia infantil)",
      "c": "Tétano neonatal",
      "d": "Meningite viral"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "A vacina contra rotavírus previne:",
    "alternativas": {
      "a": "Infecção urinária",
      "b": "Diarreia grave em crianças causada por rotavírus",
      "c": "Hepatite A",
      "d": "Sarampo"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "A vacina febre amarela previne qual doença?",
    "alternativas": {
      "a": "Malária",
      "b": "Febre amarela, causada por vírus transmitido por mosquito",
      "c": "Leptospirose",
      "d": "Chikungunya"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "A vacina meningocócica C (ou ACWY) previne:",
    "alternativas": {
      "a": "Infecção intestinal",
      "b": "Meningite meningocócica",
      "c": "Tuberculose",
      "d": "Pneumonia viral"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "A vacina pneumocócica 10-valente previne:",
    "alternativas": {
      "a": "Sarampo e rubéola",
      "b": "Pneumonia, otite e meningite causadas por Streptococcus pneumoniae",
      "c": "Difteria e tétano",
      "d": "Caxumba e hepatite B"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "O que significa IST?",
    "alternativas": {
      "a": "Infecção Sexualmente Transmissível",
      "b": "Infecção sistêmica temporária",
      "c": "Infecção sem tratamento",
      "d": "Imunodeficiência temporária"
    },
    "resposta_certa": "a"
  },
  {
    "pergunta": "Qual das opções abaixo é uma IST causada por bactéria?",
    "alternativas": {
      "a": "Herpes genital",
      "b": "Sífilis",
      "c": "HPV",
      "d": "HIV"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "Qual IST é causada pelo vírus HIV?",
    "alternativas": {
      "a": "Gonorreia",
      "b": "Sífilis",
      "c": "Aids",
      "d": "Clamídia"
    },
    "resposta_certa": "c"
  },
  {
    "pergunta": "Qual é a principal forma de transmissão das IST?",
    "alternativas": {
      "a": "Contato com saliva",
      "b": "Relação sexual desprotegida (oral, vaginal ou anal)",
      "c": "Compartilhar copos",
      "d": "Picadas de inseto"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "Qual exame é utilizado para diagnóstico rápido de sífilis na UBS?",
    "alternativas": {
      "a": "Hemograma completo",
      "b": "Teste rápido para sífilis (VDRL rápido)",
      "c": "Cultura de secreção",
      "d": "Exame de urina"
    },
    "resposta_certa": "b"
  },
  {
    "pergunta": "A camisinha é eficaz para prevenir:",
    "alternativas": {
      "a": "Apenas gravidez",
      "b": "Gravidez e a maioria das IST",
      "c": "Todas as doenças infecciosas",
      "d": "Nenhuma doença"
    },
    "resposta_certa": "b"
  }
  



];