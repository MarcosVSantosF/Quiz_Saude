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
    },
    {
      question: "Para que servem as vacinas?",
      options: [
        "Curar doenças",
        "Prevenir doenças",
        "Tratar feridas",
        "Melhorar a alimentação"
      ],
      answer: 1
    },
    {
      question: "Qual é a via mais comum de aplicação das vacinas?",
      options: [
        "Oral",
        "Intravenosa",
        "Intramuscular",
        "Retal"
      ],
      answer: 2
    },
    {
      question: "Qual dessas doenças é evitada com vacina?",
      options: [
        "Diabetes",
        "Hipertensão",
        "Sarampo",
        "Câncer"
      ],
      answer: 2
    },
    {
      question: "A vacinação é importante porque:",
      options: [
        "Garante antibióticos de graça",
        "Ajuda a imunidade do corpo",
        "Substitui o uso de medicamentos",
        "Evita ir ao médico"
      ],
      answer: 1
    },
    {
      question: "Quem oferece as vacinas no Brasil de forma gratuita?",
      options: [
        "Hospitais particulares",
        "Unidades Básicas de Saúde (UBS) pelo SUS",
        "Farmácias privadas",
        "Escolas"
      ],
      answer: 1
    },
    {
      question: "Qual órgão coordena o Programa Nacional de Imunizações (PNI) no Brasil?",
      options: [
        "Ministério da Saúde",
        "Anvisa",
        "Fiocruz",
        "Conselho Federal de Medicina"
      ],
      answer: 0
    },
    {
      question: "A tríplice viral protege contra quais doenças?",
      options: [
        "Tétano, coqueluche e difteria",
        "Hepatite B, meningite e febre amarela",
        "Sarampo, caxumba e rubéola",
        "Varíola, poliomielite e tuberculose"
      ],
      answer: 2
    },
    {
      question: "A vacina BCG é aplicada em qual fase da vida?",
      options: [
        "Ao nascer",
        "Aos 5 anos",
        "Na adolescência",
        "Na vida adulta"
      ],
      answer: 0
    },
    {
      question: "Quantas doses da vacina contra hepatite B são recomendadas para o esquema completo em adultos?",
      options: [
        "1 dose",
        "2 doses",
        "3 doses",
        "4 doses"
      ],
      answer: 2
    },
    {
      question: "Qual vacina deve ser reforçada a cada 10 anos em adultos?",
      options: [
        "BCG",
        "DTP",
        "Febre amarela",
        "Dupla adulto (dT)"
      ],
      answer: 3
    },
    {
      question: "Qual é o principal objetivo da vacinação em massa em saúde coletiva?",
      options: [
        "Erradicar doenças e criar imunidade de grupo",
        "Reduzir custos com medicamentos",
        "Substituir o uso de antibióticos",
        "Aumentar a frequência ao posto de saúde"
      ],
      answer: 0
    },
    {
      question: "Sobre a vacina contra o HPV no Brasil, assinale a alternativa correta:",
      options: [
        "É indicada apenas para mulheres adultas",
        "Faz parte do calendário vacinal e é indicada para adolescentes",
        "Protege apenas contra verrugas genitais",
        "É recomendada apenas para homens com mais de 30 anos"
      ],
      answer: 1
    },
    {
      question: "A vacina contra influenza (gripe) deve ser aplicada:",
      options: [
        "Uma única vez na vida",
        "Apenas em idosos",
        "Anualmente",
        "Somente no inverno"
      ],
      answer: 2
    },
    {
      question: "Em relação à vacina contra a Covid-19, é correto afirmar que:",
      options: [
        "Deve ser aplicada apenas em grupos de risco",
        "Não tem nenhuma contraindicação",
        "A necessidade de reforço depende da vacina e da orientação atual do PNI",
        "Substitui a vacina da gripe"
      ],
      answer: 2
    },
    {
      question: "Qual tipo de imunidade a vacina promove no organismo?",
      options: [
        "Imunidade inata",
        "Imunidade de barreira",
        "Imunidade adquirida ativa",
        "Imunidade passiva natural"
      ],
      answer: 2
    },
    {
      question: "Qual vacina é indicada para prevenir formas graves de tuberculose?",
      options: [
        "Hepatite B",
        "BCG",
        "DTP",
        "Meningocócica C"
      ],
      answer: 1
    },
    {
      question: "A vacina pentavalente protege contra quantas doenças?",
      options: [
        "Duas",
        "Três",
        "Quatro",
        "Cinco"
      ],
      answer: 3
    },
    {
      question: "A vacina contra poliomielite é administrada de forma:",
      options: [
        "Injetável apenas",
        "Oral e injetável, dependendo da fase",
        "Apenas oral",
        "Apenas na adolescência"
      ],
      answer: 1
    },
    {
      question: "Todas as vacinas causam a doença contra a qual protegem.",
      options: [
        "Verdadeiro",
        "Falso"
      ],
      answer: 1
    },
    {
      question: "Mesmo adultos saudáveis devem manter a caderneta de vacinação atualizada.",
      options: [
        "Verdadeiro",
        "Falso"
      ],
      answer: 0
    },
    {
      question: "A vacina contra a febre amarela é recomendada apenas uma vez na vida.",
      options: [
        "Verdadeiro",
        "Falso"
      ],
      answer: 0
    },
    {
      question: "Qual vacina é indicada para gestantes a cada gestação, preferencialmente a partir da 20ª semana?",
      options: [
        "Influenza",
        "dT (dupla adulto)",
        "dTpa (tríplice bacteriana acelular do adulto)",
        "Hepatite A"
      ],
      answer: 2
    },
    {
      question: "Quais vacinas são contraindicadas para gestantes?",
      options: [
        "Influenza e dT",
        "Hepatite B e Covid-19",
        "BCG, febre amarela e tríplice viral (vacinas com vírus vivos atenuados)",
        "Nenhuma vacina é contraindicada"
      ],
      answer: 2
    },
    {
      question: "O que é imunidade de rebanho (ou coletiva)?",
      options: [
        "Imunidade natural adquirida por todos",
        "Quando um grupo de pessoas toma o mesmo remédio",
        "Quando uma alta cobertura vacinal protege até quem não foi vacinado",
        "Imunidade gerada apenas por vacinas em massa"
      ],
      answer: 2
    },
    {
      question: "Qual dessas estratégias ajuda a aumentar a cobertura vacinal?",
      options: [
        "Suspender campanhas de vacinação",
        "Ampliar o horário de funcionamento das UBS",
        "Exigir exame de sangue para vacinação",
        "Vacinar somente em hospitais"
      ],
      answer: 1
    },
    {
      question: "Vacinas causam autismo?",
      options: [
        "Sim, há comprovação científica",
        "Só em crianças com histórico familiar",
        "Não, é um mito sem base científica",
        "Depende da vacina aplicada"
      ],
      answer: 2
    },
    {
      question: "Após tomar a vacina, a pessoa pode sentir efeitos como dor no local ou febre leve. Isso significa:",
      options: [
        "Que a vacina está fazendo mal",
        "Que o corpo está reagindo e criando imunidade",
        "Que a pessoa está com alergia grave",
        "Que a vacina não é segura"
      ],
      answer: 1
    },
    {
      question: "O que é uma autoclave e qual a sua principal função em uma UBS?",
      options: [
        "Equipamento para esterilizar materiais hospitalares através de calor e pressão",
        "Equipamento para realizar exames laboratoriais",
        "Equipamento para armazenar medicamentos",
        "Equipamento para realizar atendimentos de urgência"
      ],
      answer: 0
    },
    {
      question: "A autoclave é utilizada principalmente para esterilizar materiais como:",
      options: [
        "Medicamentos",
        "Equipamentos de uso único, como seringas e agulhas",
        "Alimentos",
        "Roupas hospitalares"
      ],
      answer: 1
    },
    {
      question: "A principal razão para usar uma autoclave na UBS é:",
      options: [
        "Melhorar a aparência dos materiais",
        "Prevenir a contaminação cruzada e garantir a segurança dos pacientes",
        "Reduzir o custo dos materiais descartáveis",
        "Acelerar os processos de atendimento"
      ],
      answer: 1
    },
    {
      question: "Como a autoclave realiza a esterilização dos materiais?",
      options: [
        "Utiliza radiação ultravioleta",
        "Utiliza calor e pressão elevados para destruir microrganismos",
        "Usa soluções químicas para limpar os materiais",
        "Usa corrente elétrica para esterilizar"
      ],
      answer: 1
    },
    {
      question: "Quais são os parâmetros principais para uma esterilização eficaz em uma autoclave?",
      options: [
        "Temperatura, pressão e tempo de exposição",
        "Apenas temperatura e tempo",
        "Tempo e quantidade de material",
        "Somente a temperatura"
      ],
      answer: 0
    },
    {
      question: "O que deve ser feito para garantir a eficácia da esterilização na autoclave?",
      options: [
        "Monitorar a temperatura e pressão regularmente",
        "Descartar todos os materiais após o uso",
        "Limpar a autoclave com detergentes comuns",
        "Nunca abrir a autoclave durante o processo"
      ],
      answer: 0
    },
    {
      question: "Qual desses materiais NÃO pode ser esterilizado em uma autoclave?",
      options: [
        "Seringas plásticas descartáveis",
        "Instrumentos cirúrgicos metálicos",
        "Produtos de vidro e borracha resistentes ao calor",
        "Equipamentos eletrônicos"
      ],
      answer: 3
    },
    {
      question: "Qual é a importância de verificar a data de validade dos ciclos de esterilização da autoclave?",
      options: [
        "Para garantir que o processo de esterilização foi realizado com sucesso",
        "Para verificar se os produtos estão dentro da data de validade",
        "Para saber se os materiais foram armazenados corretamente",
        "Para evitar custos excessivos com manutenção"
      ],
      answer: 0
    },
    {
      question: "Em uma UBS, qual profissional geralmente é responsável pela operação da autoclave?",
      options: [
        "Médico",
        "Enfermeiro",
        "Técnico de enfermagem ou auxiliar de serviços gerais",
        "Agente Comunitário de Saúde"
      ],
      answer: 2
    },
    {
      question: "Quando a autoclave apresenta falhas (como não atingir a temperatura correta), o que deve ser feito?",
      options: [
        "Continuar o ciclo de esterilização normalmente",
        "Descartar imediatamente os materiais",
        "Parar o processo e realizar manutenção na autoclave",
        "Esperar até o próximo ciclo de esterilização para tentar novamente"
      ],
      answer: 2
    },
    {
      question: "Qual é a principal consequência de não realizar a esterilização adequada dos materiais na UBS?",
      options: [
        "O aumento da durabilidade dos materiais",
        "O risco de infecções e contaminações cruzadas",
        "A melhora na qualidade do atendimento",
        "Nenhuma consequência, pois a limpeza é suficiente"
      ],
      answer: 1
    },
    {
      question: "Qual tipo de material deve ser embalado antes de ser colocado na autoclave?",
      options: [
        "Materiais que não vão ser reutilizados",
        "Materiais de vidro, plásticos e instrumentos cirúrgicos reutilizáveis",
        "Apenas os materiais usados em procedimentos de emergência",
        "Apenas materiais metálicos"
      ],
      answer: 1
    },
    {
      question: "O que é a sala de hipodermia em uma UBS?",
      options: [
        "Um local destinado à realização de exames laboratoriais",
        "Um espaço onde são administrados medicamentos via subcutânea, como insulina",
        "Uma área para atendimento de urgências e emergências",
        "Um setor exclusivo para aplicação de vacinas"
      ],
      answer: 1
    },
    {
      question: "Quais tipos de medicamentos geralmente são administrados na sala de hipodermia?",
      options: [
        "Medicamentos orais",
        "Medicamentos intravenosos",
        "Medicamentos subcutâneos, como insulina e anticoagulantes",
        "Medicamentos em pomada"
      ],
      answer: 2
    },
    {
      question: "Qual é a principal vantagem da administração de medicamentos via subcutânea?",
      options: [
        "Agir rapidamente no organismo",
        "Manter uma liberação mais lenta e constante do medicamento",
        "Causar menos dor que a via intravenosa",
        "Ser mais simples e rápida que a via intramuscular"
      ],
      answer: 1
    },
    {
      question: "Quais são as precauções que devem ser tomadas ao aplicar uma injeção subcutânea?",
      options: [
        "Utilizar sempre agulhas de grande calibre",
        "Não massagear o local após a aplicação",
        "Evitar aplicar em áreas com lesões ou infecções na pele",
        "Administrar o medicamento de forma muito rápida"
      ],
      answer: 2
    },
    {
      question: "Quais locais do corpo são mais indicados para a aplicação de medicamentos via subcutânea?",
      options: [
        "Braços e coxas",
        "Glúteos e abdômen",
        "Mãos e pés",
        "Pescoço e mandíbula"
      ],
      answer: 1
    },
    {
      question: "O que deve ser verificado antes de administrar um medicamento na sala de hipodermia?",
      options: [
        "A temperatura ambiente",
        "O prazo de validade do medicamento e a prescrição médica",
        "A quantidade de medicamento disponível",
        "Se o paciente tem alergia à via de administração"
      ],
      answer: 1
    },
    {
      question: "Como deve ser feita a escolha da agulha para a aplicação subcutânea?",
      options: [
        "Deve ser de grande calibre para garantir rápida absorção",
        "Deve ser de pequeno calibre e curta, para evitar dor excessiva",
        "Deve ser de tamanho médio para prevenir complicações",
        "Não importa o tamanho da agulha, desde que a injeção seja feita corretamente"
      ],
      answer: 1
    },
    {
      question: "Qual é o principal cuidado após a administração de um medicamento na sala de hipodermia?",
      options: [
        "Não é necessário monitorar o paciente após a aplicação",
        "Observar o local da aplicação quanto a sinais de reação adversa, como dor, hematomas ou inchaço",
        "Garantir que o paciente esteja em jejum por mais de 4 horas",
        "Aplicar outra dose do medicamento para garantir o efeito desejado"
      ],
      answer: 1
    },
    {
      question: "O que deve ser feito se o paciente relatar dor ou inchaço no local da injeção subcutânea?",
      options: [
        "Continuar o procedimento normalmente",
        "Informar imediatamente o médico ou enfermeiro e observar o local",
        "Aplicar outra injeção no mesmo local",
        "Aguardar 24 horas para verificar se os sintomas desaparecem"
      ],
      answer: 1
    },
    {
      question: "Quando a sala de hipodermia deve ser desinfetada?",
      options: [
        "Somente quando houver troca de medicamentos",
        "Antes e após cada procedimento, com desinfecção adequada das superfícies e utensílios",
        "Uma vez por semana, independente do uso",
        "Quando os pacientes pedirem, por precaução"
      ],
      answer: 1
    },
    {
      question: "Qual a postura correta para a aplicação de uma injeção subcutânea?",
      options: [
        "O paciente deve estar deitado de costas, com o braço esticado",
        "O paciente deve estar sentado com o braço relaxado",
        "O paciente deve estar deitado com a cabeça levantada",
        "O paciente deve estar em pé, com o braço esticado"
      ],
      answer: 1
    },
    {
      question: "O que pode ocorrer se a aplicação de medicamentos subcutâneos não for realizada corretamente?",
      options: [
        "Não há nenhum risco para o paciente",
        "Pode haver irritação local, infecção, hematomas ou falha na absorção do medicamento",
        "O medicamento se torna mais potente",
        "Não tem impacto, já que a via subcutânea é mais segura"
      ],
      answer: 1
    },
    {
      question: "O que é o esquema vacinal?",
      options: [
        "A lista de vacinas obrigatórias para adultos",
        "A ordem e o número de doses das vacinas recomendadas em cada faixa etária",
        "O prazo para renovação do cartão de vacinas",
        "O nome das vacinas oferecidas em hospitais"
      ],
      answer: 1
    },
    {
      question: "Qual é a principal função do esquema vacinal?",
      options: [
        "Controlar doenças apenas em adultos",
        "Estabelecer a quantidade de vacinas que devem ser aplicadas anualmente",
        "Garantir a prevenção e o controle de doenças em todas as faixas etárias",
        "Fornecer vacinas de reforço para trabalhadores da saúde"
      ],
      answer: 2
    },
    {
      question: "O esquema vacinal recomendado pelo SUS é baseado em qual documento?",
      options: [
        "Manual de Medicações",
        "Cartilha do Ministério da Saúde",
        "Calendário Nacional de Vacinação",
        "Política Nacional de Saúde"
      ],
      answer: 2
    },
    {
      question: "Qual a importância de seguir rigorosamente o esquema vacinal na UBS?",
      options: [
        "Garantir que todos os pacientes recebam a mesma vacina",
        "Prevenir surtos e epidemias de doenças evitáveis por meio da vacinação",
        "Reduzir os custos do SUS",
        "Manter a quantidade de vacinas armazenadas no estoque"
      ],
      answer: 1
    },
    {
      question: "Qual vacina é aplicada no nascimento, de acordo com o esquema vacinal?",
      options: [
        "Tríplice viral",
        "Hepatite B",
        "DTP (Difteria, Tétano e Coqueluche)",
        "Febre amarela"
      ],
      answer: 1
    },
    {
      question: "Qual vacina é indicada para bebês aos 2, 4 e 6 meses de idade, no esquema vacinal?",
      options: [
        "BCG",
        "Meningocócica C",
        "Pentavalente",
        "Hepatite A"
      ],
      answer: 2
    },
    {
      question: "O que o profissional de saúde deve fazer se o paciente perder a carteira de vacinação?",
      options: [
        "Ignorar, pois a vacinação não é obrigatória",
        "Fornecer uma nova carteira de vacinação e iniciar a vacinação do zero",
        "Consultar o sistema de registros de vacinas e atualizar o histórico vacinal",
        "Encaminhar o paciente para outro posto de saúde"
      ],
      answer: 2
    },
    {
      question: "Quando é necessário um reforço no esquema vacinal?",
      options: [
        "Apenas quando o paciente solicita",
        "Quando o paciente não compareceu à UBS no prazo recomendado",
        "Quando o paciente perde a carteira de vacinação",
        "Quando o esquema vacinal da vacina específica indica doses de reforço, como no caso da DTP e da vacina contra febre amarela"
      ],
      answer: 3
    },
    {
      question: "O que o profissional de saúde deve observar antes de administrar uma vacina na UBS?",
      options: [
        "Se o paciente está com sintomas de gripe",
        "Se o paciente tem a vacina prescrita pelo médico",
        "Se o paciente está dentro da faixa etária e se o esquema vacinal está correto",
        "Se o paciente tem plano de saúde para garantir a vacina gratuita"
      ],
      answer: 2
    },
    {
      question: "Qual é a vacina de reforço aplicada aos 10 anos, conforme o calendário vacinal?",
      options: [
        "Hepatite B",
        "DTP (Difteria, Tétano e Coqueluche)",
        "Tríplice viral",
        "Febre amarela"
      ],
      answer: 1
    },
    {
      question: "A vacina contra a gripe (Influenza) é indicada para qual público-alvo?",
      options: [
        "Somente crianças com menos de 2 anos",
        "Apenas idosos com mais de 65 anos",
        "Crianças, gestantes, idosos, profissionais de saúde e pessoas com comorbidades",
        "Apenas adultos saudáveis"
      ],
      answer: 2
    },
    {
      question: "O que é importante verificar antes de aplicar a vacina contra a febre amarela?",
      options: [
        "Se o paciente tem febre no momento da aplicação",
        "Se o paciente tem histórico de alergias graves",
        "Se o paciente está viajando para regiões endêmicas",
        "Se o paciente é idoso ou imunocomprometido"
      ],
      answer: 1
    },
    {
      question: "Qual a diferença entre vacinas de calendário e vacinas sazonais?",
      options: [
        "Vacinas de calendário são dadas somente em hospitais; vacinas sazonais, em clínicas privadas",
        "Vacinas de calendário seguem o cronograma regular do SUS; vacinas sazonais são dadas em épocas específicas, como a da gripe",
        "Vacinas de calendário são para adultos; vacinas sazonais são para crianças",
        "Não há diferença, ambas são administradas ao longo da vida"
      ],
      answer: 1
    },
    {
      question: "O que o profissional de saúde deve fazer ao observar que o paciente não compareceu para as doses de reforço da vacina?",
      options: [
        "Administrar a dose de reforço imediatamente",
        "Marcar uma nova consulta para a aplicação da dose em atraso",
        "Encaminhar para um hospital para a administração da vacina",
        "Informar que a vacina não será mais eficaz"
      ],
      answer: 1
    },
    {
      question: "Qual é a principal estratégia do SUS para aumentar a adesão à vacinação nas UBS?",
      options: [
        "Exigir que todas as pessoas paguem pelo serviço de vacinação",
        "Realizar campanhas de conscientização e facilitar o acesso às vacinas em diversos horários",
        "Limitar a distribuição de vacinas para grupos específicos",
        "Aplicar apenas vacinas obrigatórias e não realizar campanhas de reforço"
      ],
      answer: 1
    },
    {
      question: "Qual é a temperatura recomendada para o armazenamento de vacinas em uma geladeira da UBS?",
      options: [
        "Entre 0°C e 5°C",
        "Entre 2°C e 8°C",
        "Entre 8°C e 12°C",
        "Entre 10°C e 15°C"
      ],
      answer: 1
    },
    {
      question: "Por que é importante monitorar a temperatura da geladeira onde as vacinas são armazenadas na UBS?",
      options: [
        "Para garantir que os alimentos não descongelem",
        "Para evitar que as vacinas percam a eficácia e causem reações adversas",
        "Para garantir que os medicamentos não se alterem devido à temperatura",
        "Para evitar que a geladeira quebre"
      ],
      answer: 1
    },
    {
      question: "Como a temperatura da geladeira deve ser monitorada na UBS?",
      options: [
        "Somente quando as vacinas são administradas",
        "Usando um termômetro de máximo e mínimo, com registros diários",
        "Não é necessário monitorar, basta ajustar a temperatura",
        "Apenas durante o horário de expediente"
      ],
      answer: 1
    },
    {
      question: "O que deve ser feito se a temperatura da geladeira ficar fora da faixa recomendada para vacinas (2°C a 8°C)?",
      options: [
        "Descartar imediatamente todas as vacinas armazenadas",
        "Informar a equipe responsável, ajustar a temperatura e verificar a integridade das vacinas",
        "Continuar usando a geladeira normalmente, sem fazer ajustes",
        "Colocar as vacinas em outra geladeira temporariamente sem monitorar a temperatura"
      ],
      answer: 1
    },
    {
      question: "Qual é o impacto do armazenamento inadequado de vacinas devido à temperatura incorreta?",
      options: [
        "As vacinas se tornam mais eficazes",
        "As vacinas podem perder a eficácia, comprometer a saúde dos pacientes e gerar falha na imunização",
        "Não há impacto, as vacinas ainda funcionam normalmente",
        "O medicamento fica mais concentrado e eficaz"
      ],
      answer: 1
    },
    {
      question: "Como a geladeira de vacinas deve ser organizada na UBS?",
      options: [
        "Todos os medicamentos e vacinas devem ser armazenados juntos, sem nenhuma separação",
        "As vacinas devem ser armazenadas separadas de alimentos e com boa circulação de ar",
        "As vacinas podem ser armazenadas em qualquer tipo de embalagem, sem preocupações com a organização",
        "Somente as vacinas mais caras devem ser armazenadas de forma correta"
      ],
      answer: 1
    },
    {
      question: "O que deve ser feito caso a geladeira da UBS apresente falha no sistema de refrigeração?",
      options: [
        "Esperar até que o problema seja resolvido sem mover as vacinas",
        "Remover as vacinas e armazená-las em outra geladeira que esteja funcionando corretamente",
        "Descartar as vacinas imediatamente, pois podem estar comprometidas",
        "Continuar usando a geladeira sem monitoramento"
      ],
      answer: 1
    },
    {
      question: "Qual é a melhor forma de verificar se a geladeira está funcionando corretamente?",
      options: [
        "Observar se a luz da geladeira está acesa",
        "Checar o termômetro e registrar a temperatura ao longo do dia",
        "Garantir que a geladeira esteja sempre cheia de vacinas",
        "Verificar a temperatura apenas no final do expediente"
      ],
      answer: 1
    },
    {
      question: "O que é um termômetro de máxima e mínima e por que ele é utilizado na geladeira de vacinas?",
      options: [
        "Um termômetro que mede a temperatura interna do medicamento",
        "Um termômetro que registra a temperatura máxima e mínima atingida, ajudando a monitorar variações",
        "Um termômetro usado apenas para medir a temperatura ambiente da sala",
        "Um termômetro utilizado para verificar a temperatura do paciente"
      ],
      answer: 1
    },
    {
      question: "Quais são as consequências do armazenamento de vacinas em temperaturas superiores a 8°C?",
      options: [
        "O efeito da vacina pode ser potencializado, causando reações mais rápidas",
        "Não há consequências, as vacinas continuam eficazes",
        "As vacinas podem ter a eficácia prejudicada, podendo comprometer a proteção ao paciente",
        "O aumento da temperatura faz com que as vacinas sejam mais concentradas e poderosas"
      ],
      answer: 2
    },
    {
      question: "O que fazer se houver queda de energia elétrica na UBS por mais de 2 horas?",
      options: [
        "Não fazer nada, pois as vacinas não são afetadas",
        "Descartar todas as vacinas que estavam armazenadas na geladeira",
        "Verificar a temperatura da geladeira, tentar manter as vacinas refrigeradas e registrar o evento",
        "Aguardar até que a energia retorne e verificar as vacinas depois"
      ],
      answer: 2
    },
    {
      question: "A geladeira da UBS pode ser usada para armazenar alimentos e vacinas ao mesmo tempo?",
      options: [
        "Sim, não há problema em armazenar vacinas e alimentos juntos",
        "Não, vacinas devem ser armazenadas separadamente de alimentos para evitar contaminação",
        "Não, mas apenas se as vacinas forem embaladas adequadamente",
        "Sim, mas apenas em pequenas quantidades de vacinas"
      ],
      answer: 1
    },
    {
      question: "O que fazer caso a geladeira da UBS esteja muito cheia e a circulação de ar fique comprometida?",
      options: [
        "Deixar os medicamentos fora da geladeira até o espaço ser reorganizado",
        "Organizar as vacinas de forma que não bloqueiem a circulação de ar e mantenham a temperatura adequada",
        "Retirar todas as vacinas e armazená-las em temperatura ambiente",
        "Não há necessidade de reorganizar, pois a geladeira mantém a temperatura automaticamente"
      ],
      answer: 1
    },
    {
      question: "Como deve ser o processo de registro da temperatura da geladeira na UBS?",
      options: [
        "A temperatura deve ser registrada em planilhas todos os dias, de preferência pela manhã e à noite",
        "A temperatura não precisa ser registrada, apenas observada ocasionalmente",
        "A temperatura deve ser registrada uma vez por semana",
        "A temperatura só precisa ser registrada quando houver variações"
      ],
      answer: 0
    },
    {
      question: "Qual o intervalo de tempo recomendado para a verificação e registro da temperatura da geladeira?",
      options: [
        "A cada 2 horas",
        "A cada 12 horas",
        "Diariamente, ao abrir a geladeira pela manhã e à noite",
        "A cada 3 dias"
      ],
      answer: 2
    },
    {
      question: "A partir de que idade a mulher deve começar a fazer o exame preventivo (Papanicolau)?",
      options: [
        "15 anos",
        "18 anos",
        "Quando iniciar a vida sexual, a partir dos 25 anos regularmente",
        "Após os 40 anos"
      ],
      answer: 2
    },
    {
      question: "Qual a principal finalidade do exame Papanicolau?",
      options: [
        "Detectar gravidez",
        "Identificar infecções urinárias",
        "Diagnosticar precocemente o câncer do colo do útero",
        "Avaliar fertilidade"
      ],
      answer: 2
    },
    {
      question: "A UBS oferece acompanhamento para gestantes?",
      options: [
        "Sim",
        "Não"
      ],
      answer: 0
    },
    {
      question: "Qual é a periodicidade recomendada para o preventivo em mulheres sem fatores de risco e com exames normais?",
      options: [
        "Anual",
        "A cada 3 anos após dois exames anuais consecutivos normais",
        "A cada 5 anos",
        "Somente quando houver sintomas"
      ],
      answer: 1
    },
    {
      question: "Além do exame preventivo, a UBS também realiza:",
      options: [
        "Cirurgias ginecológicas",
        "Mamografia",
        "Aconselhamento sobre métodos contraceptivos",
        "Exames genéticos"
      ],
      answer: 2
    },
    {
      question: "Qual é o método contraceptivo que pode ser implantado na UBS em algumas situações?",
      options: [
        "DIU (Dispositivo Intrauterino)",
        "Laqueadura",
        "Anticoncepcional injetável mensal",
        "Pílula do dia seguinte"
      ],
      answer: 0
    },
    {
      question: "Qual dos seguintes serviços é voltado para o planejamento familiar e oferecido na UBS?",
      options: [
        "Consulta com endocrinologista",
        "Palestras e orientações sobre métodos contraceptivos",
        "Cirurgia de esterilização",
        "Ultrassom obstétrico"
      ],
      answer: 1
    },
    {
      question: "Durante o pré-natal na UBS, quais exames são realizados rotineiramente?",
      options: [
        "Hemograma, tipagem sanguínea, sorologias e ultrassonografia",
        "Só teste de gravidez",
        "Raio-x de tórax",
        "Tomografia"
      ],
      answer: 0
    },
    {
      question: "A UBS pode encaminhar a mulher para mamografia quando ela tem:",
      options: [
        "Menos de 20 anos",
        "Entre 25 e 35 anos",
        "40 anos ou mais, ou antes disso se houver indicação médica",
        "Apenas após os 60 anos"
      ],
      answer: 2
    },
    {
      question: "Qual é a importância das consultas regulares na UBS para a saúde da mulher?",
      options: [
        "Aumentar o número de consultas",
        "Diagnosticar doenças apenas quando já estão avançadas",
        "Promover prevenção, diagnóstico precoce e cuidado contínuo",
        "Obter receitas de forma mais rápida"
      ],
      answer: 2
    },
    {
      question: "Quais doenças podem ser detectadas pelos testes rápidos oferecidos na UBS?",
      options: [
        "Câncer de pele e diabetes",
        "HIV, sífilis, hepatite B e C",
        "Covid-19 e tuberculose",
        "Gripe e dengue"
      ],
      answer: 1
    },
    {
      question: "Quanto tempo, em média, leva para sair o resultado de um teste rápido?",
      options: [
        "1 semana",
        "24 horas",
        "De 20 a 30 minutos",
        "2 horas"
      ],
      answer: 2
    },
    {
      question: "Os testes rápidos são indicados apenas para pessoas com sintomas?",
      options: [
        "Sim",
        "Não, qualquer pessoa pode realizar, inclusive de forma preventiva",
        "Apenas em caso de urgência",
        "Somente gestantes"
      ],
      answer: 1
    },
    {
      question: "Qual profissional pode realizar o teste rápido na UBS?",
      options: [
        "Apenas médicos",
        "Enfermeiros e técnicos capacitados",
        "Apenas farmacêuticos",
        "Agentes comunitários"
      ],
      answer: 1
    },
    {
      question: "O teste rápido de HIV detecta o vírus imediatamente após a exposição?",
      options: [
        "Sim, em até 24 horas",
        "Não, é necessário aguardar o período de janela imunológica",
        "Sim, se feito com sangue",
        "Só funciona com sintomas visíveis"
      ],
      answer: 1
    },
    {
      question: "O que é janela imunológica?",
      options: [
        "Tempo de validade do teste",
        "Tempo necessário para o corpo produzir anticorpos detectáveis pelo teste",
        "Nome do local onde o teste é feito",
        "Tipo de teste de gravidez"
      ],
      answer: 1
    },
    {
      question: "Em quais situações a UBS oferece testes rápidos como rotina?",
      options: [
        "Apenas em campanhas de saúde",
        "Apenas se a pessoa pedir",
        "Em consultas de pré-natal, planejamento familiar e atendimentos de rotina",
        "Só em hospitais"
      ],
      answer: 2
    },
    {
      question: "O teste rápido de sífilis pode ser feito com qual tipo de amostra?",
      options: [
        "Saliva",
        "Urina",
        "Gota de sangue da ponta do dedo",
        "Raio-x"
      ],
      answer: 2
    },
    {
      question: "Os testes rápidos são pagos ou gratuitos na UBS?",
      options: [
        "Gratuitos",
        "Apenas para pessoas com renda baixa",
        "Gratuitos com agendamento prévio obrigatório",
        "Pagos apenas em caso de urgência"
      ],
      answer: 0
    },
    {
      question: "Qual é a vantagem dos testes rápidos na atenção básica?",
      options: [
        "Evitar ir ao hospital",
        "Receber medicamentos de graça",
        "Diagnóstico precoce e início rápido do tratamento",
        "Substituir todos os exames laboratoriais"
      ],
      answer: 2
    },
    {
      question: "O que é diabetes?",
      options: [
        "Uma doença do fígado",
        "Uma infecção bacteriana",
        "Uma condição em que o corpo não produz ou não utiliza corretamente a insulina",
        "Uma inflamação nos rins"
      ],
      answer: 2
    },
    {
      question: "Qual é a principal função da insulina no organismo?",
      options: [
        "Combater vírus",
        "Regular a pressão arterial",
        "Ajudar a glicose a entrar nas células para produzir energia",
        "Melhorar a digestão"
      ],
      answer: 2
    },
    {
      question: "Quais são os principais sintomas do diabetes não controlado?",
      options: [
        "Visão turva, sede excessiva e urinar com frequência",
        "Dor de cabeça e febre",
        "Dor muscular e cansaço leve",
        "Tontura e dor de garganta"
      ],
      answer: 0
    },
    {
      question: "Qual é a diferença entre diabetes tipo 1 e tipo 2?",
      options: [
        "Tipo 1 é hereditário e o tipo 2 é contagioso",
        "Tipo 1 geralmente aparece na infância e o tipo 2 na fase adulta",
        "Tipo 1 é mais leve que o tipo 2",
        "Tipo 1 é causado por má alimentação"
      ],
      answer: 1
    },
    {
      question: "Quando o uso da insulina é necessário?",
      options: [
        "Somente durante o exercício físico",
        "Em todos os casos de diabetes tipo 2",
        "Quando o corpo não produz insulina suficiente, como no tipo 1 ou em alguns casos de tipo 2",
        "Apenas para crianças diabéticas"
      ],
      answer: 2
    },
    {
      question: "Onde a insulina deve ser aplicada?",
      options: [
        "Na veia",
        "No músculo do braço",
        "No estômago ou coxa, por via subcutânea",
        "Na boca"
      ],
      answer: 2
    },
    {
      question: "O que pode acontecer se uma pessoa com diabetes esquecer de aplicar a insulina?",
      options: [
        "Nada, se ela estiver se sentindo bem",
        "Pode ocorrer aumento da glicose no sangue, levando a complicações graves",
        "Ela pode perder o apetite apenas",
        "A insulina se forma sozinha no corpo depois"
      ],
      answer: 1
    },
    {
      question: "Qual é a unidade usada para medir a glicemia (açúcar no sangue)?",
      options: [
        "BPM",
        "ML",
        "MG/dL",
        "Kcal"
      ],
      answer: 2
    },
    {
      question: "Qual valor de glicemia em jejum pode indicar diabetes?",
      options: [
        "Abaixo de 70 mg/dL",
        "Entre 70 e 99 mg/dL",
        "Igual ou maior que 126 mg/dL",
        "Qualquer valor acima de 90 mg/dL"
      ],
      answer: 2
    },
    {
      question: "Além da insulina, o que ajuda no controle do diabetes?",
      options: [
        "Dormir mais",
        "Uso de antibióticos",
        "Alimentação saudável, atividade física e monitoramento da glicose",
        "Tomar refrigerante diet"
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