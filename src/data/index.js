export const SITE_DATA = {
  "pt-br": {
    "site": {
      "description": "Site pessoal de glbessa.",
      "copyright": "© 2024 Copyright."
    },
    "author": {
      "name": "Gabriel Leite Bessa",
      "nickname": "glbessa",
      "image": "img/profile.png",
      "greeting": "Olá, eu sou",
      "contactInfo": {
        "email": "gabrielleitebessa@gmail.com",
        "phone": "+55 53 984655136",
        "github": {
          "icon": "github",
          "url": "https://github.com/glbessa",
          "text": "glbessa no GitHub"
        },
        "linkedin": {
          "icon": "linkedin",
          "url": "https://www.linkedin.com/in/gabrielleitebessa/",
          "text": "glbessa no LinkedIn"
        }
      },
      "summary": [
        "Desenvolvedor de software",
        "Pythonista",
        "Adoro projetos com IA e visão computacional"
      ]
    },
    "about": [
      {
        "name": "LinkedIn",
        "icon": "fab fa-linkedin",
        "url": "https://www.linkedin.com/in/gabrielleitebessa"
      },
      {
        "name": "Twitter",
        "icon": "fab fa-twitter",
        "url": "https://twitter.com/gabriel_bessa_1"
      },
      {
        "name": "Instagram",
        "icon": "fab fa-instagram",
        "url": "https://www.instagram.com/gabrielleitebessa"
      }
    ],
    "projectsSection": {
      "section": {
        "name": "Projetos",
        "id": "projects",
        "enable": true,
        "weight": 2,
        "showOnNavbar": true
      },
      "buttons": [
        { "name": "Todos", "filter": "all" },
        { "name": "Profissionais", "filter": "professional" },
        { "name": "Acadêmicos", "filter": "academic" },
        { "name": "Hobby", "filter": "hobby" }
      ],
      "projects": [
        {
          "name": "DeepRAD",
          "role": "Pesquisador Desenvolvedor de IA",
          "timeline": "Julho 2022 - Presente",
          "repo": "https://github.com/gaia-ufpel/DeepRAD",
          "summary": "",
          "tags": ["academic", "deep-learning", "radiology"]
        },
        {
          "name": "Confortímetro Klimaa Simulações",
          "role": "Desenvolvedor de Software",
          "timeline": "Outubro 2023 - Março 2024",
          "repo": "https://github.com/gaia-ufpel/confortimetro_klimaa_simulacoes",
          "summary": "Aplicativo desenvolvido para realizar simulações personalizadas utilizando EnergyPlus e Python.",
          "tags": ["academic", "python", "energyplus"]
        },
        {
          "name": "Confortímetro Klimaa",
          "role": "Desenvolvedor Backend e Infraestrutura",
          "timeline": "Outubro 2023 - Presente",
          "repo": "https://github.com/gaia-ufpel/confortimetro_klimaa",
          "summary": "Aplicação completa para acompanhamento de conforto térmico em ambientes internos da UFPel.",
          "tags": ["academic", "python", "fastapi"]
        },
        {
          "name": "Transferência de Estilo IA",
          "repo": "https://github.com/glbessa/NeuralStyleTransfer",
          "summary": "Transferência de estilo utilizando redes neurais convolucionais implementado em PyTorch.",
          "tags": ["hobby", "deep-learning", "computer-vision"]
        },
        {
          "name": "Detecção de olhos fechados",
          "repo": "https://github.com/glbessa/ClosedEyesDetection",
          "summary": "Detecção de olhos fechados em tempo real com OpenCV e Dlib.",
          "tags": ["hobby", "computer-vision", "machine-learning"]
        },
        {
          "name": "Verificação Facial",
          "repo": "https://github.com/glbessa/FacialVerification",
          "summary": "Implementação de um algoritmo de verificação facial com redes siamesas.",
          "tags": ["hobby", "deep-learning", "computer-vision"]
        },
        {
          "name": "Relógio de Xadrez",
          "repo": "https://github.com/glbessa/RelogioDeXadrez",
          "summary": "Relógio de xadrez mobile.",
          "tags": ["hobby", "flutter"]
        },
        {
          "name": "ASCII Dungeon",
          "repo": "https://github.com/glbessa/ascii_dungeon",
          "summary": "Explore uma dungeon em ASCII com monstros e outras criaturas e obtenha armas melhores para enfrentar o boss final!",
          "tags": ["hobby", "game", "ASCII", "C"]
        },
        {
          "name": "Z808-Feijoada",
          "repo": "https://github.com/RaideNnigth/Z808-Feijoada",
          "summary": "Simulador e compilador da máquina hipotética Z808.",
          "tags": ["academic", "simulator", "compiler", "Z808", "java"]
        },
        {
          "name": "Word Guesser",
          "repo": "https://github.com/glbessa/WordGuesser",
          "url": "https://glbessa.github.io/WordGuesser",
          "summary": "Adivinha as palavras e ganhe pontos!",
          "tags": ["hobby", "game", "word game", "reactjs"]
        },
        {
          "name": "Pesagens de Gado",
          "repo": "https://github.com/glbessa/PesagensDeGado",
          "summary": "Aplicativo para controle de pesagens de gado e integração com balança eletrônica.",
          "tags": ["hobby", "flutter"]
        }
      ]
    }
  },
  "en": {
    "site": {
      "copyright": "© 2024 Copyright."
    }
    // English content was mostly empty or duplicated in files, maintaining basic structure.
  }
};

export const currentLang = 'pt-br';
export const getData = (lang = currentLang) => SITE_DATA[lang];
