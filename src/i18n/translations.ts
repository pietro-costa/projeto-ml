import type { SkillCategory } from '../data/profile'

export type Language = 'pt' | 'en'

type JourneyStep = { year: string; title: string; description: string }

type ProjectText = { title: string; description: string; highlights: string[]; category: string }

export type Translations = {
  nav: { sobre: string; skills: string; projetos: string; contato: string }
  hero: {
    greeting: string
    role: string
    tagline: string
    ctaProjects: string
    ctaContact: string
    terminalLines: string[]
  }
  stats: { label: string; value: number; suffix: string }[]
  about: {
    sectionLabel: string
    title: string
    bio: string
    journeyLabel: string
    journey: JourneyStep[]
  }
  skills: {
    sectionLabel: string
    title: string
    categories: Record<SkillCategory, string>
  }
  projects: {
    sectionLabel: string
    title: string
    featuredBadge: string
    githubLink: string
    demoLink: string
    items: Record<string, ProjectText>
  }
  footer: {
    sectionLabel: string
    title: string
    description: string
    email: string
    linkedin: string
    github: string
    builtWith: string
  }
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: { sobre: 'Sobre', skills: 'Skills', projetos: 'Projetos', contato: 'Contato' },
    hero: {
      greeting: 'Olá, eu sou',
      role: 'Analista de Dados @ Itaú',
      tagline: 'Curiosidade de cientista, disciplina de analista de banco.',
      ctaProjects: 'Ver Projetos',
      ctaContact: 'Entrar em Contato',
      terminalLines: [
        '$ whoami',
        '> analista de dados, itaú — em transição para ciência de dados',
        '$ cat objetivo.txt',
        '> transformar dados financeiros em decisões com machine learning',
        '$ ls projetos/',
        '> titanic  fraude  credito  segmentacao  chatbot-rag',
        '$ status --carreira',
        '> [####------] migrando para Data Science... 40%',
      ],
    },
    stats: [
      { label: 'Projetos práticos', value: 5, suffix: '' },
      { label: 'Anos no setor financeiro', value: 3, suffix: '+' },
      { label: 'Modelos de ML treinados', value: 10, suffix: '+' },
      { label: 'Linhas de código (e contando)', value: 12, suffix: 'k+' },
    ],
    about: {
      sectionLabel: '01. Sobre mim',
      title: 'Da análise à ciência de dados',
      bio: 'Todo dia eu mexo com dados que movem decisões reais — e foi nesse fluxo, entre relatórios, queries e dashboards, que percebi que o que mais me motiva não é descrever o que aconteceu, e sim prever o que vai acontecer e construir algo que aja sobre isso. Por isso comecei minha transição para Ciência de Dados: estudando Machine Learning, NLP e IA generativa fora do horário de trabalho, transformando teoria em projetos que resolvem problemas parecidos com os que vejo no dia a dia de um banco — fraude, crédito, churn, atendimento. Este portfólio é o registro dessa jornada: cada projeto é uma pergunta de negócio que eu decidi tentar responder com dados.',
      journeyLabel: '// minha trajetória',
      journey: [
        {
          year: '2022 — hoje',
          title: 'Analista de Dados no Itaú',
          description:
            'Trabalho com dados financeiros no dia a dia: relatórios, dashboards e análises que apoiam decisões de negócio em grande escala.',
        },
        {
          year: '2024',
          title: 'Mergulho em Machine Learning',
          description:
            'Comecei a aplicar estatística e algoritmos de ML em problemas reais do setor financeiro — fraude, crédito e segmentação de clientes.',
        },
        {
          year: '2025',
          title: 'IA Generativa & NLP',
          description:
            'Expandi para LLMs, embeddings e arquiteturas RAG, construindo um assistente capaz de analisar reclamações de clientes em linguagem natural.',
        },
        {
          year: 'Próximo passo',
          title: 'Cientista de Dados',
          description:
            'Buscando uma posição onde eu possa unir a visão de negócio que tenho do setor bancário com modelagem estatística e IA aplicada.',
        },
      ],
    },
    skills: {
      sectionLabel: '02. Stack',
      title: 'Ferramentas e tecnologias',
      categories: {
        languages: 'Linguagens & Ferramentas',
        ml: 'Machine Learning',
        nlp: 'NLP & IA Generativa',
        viz: 'Visualização & Análise',
      },
    },
    projects: {
      sectionLabel: '03. Projetos',
      title: 'Ciência de Dados na prática',
      featuredBadge: 'Projeto em destaque',
      githubLink: 'GitHub ↗',
      demoLink: 'Demo ↗',
      items: {
        'rag-reclamacoes-financeiras': {
          title: 'Chatbot de Análise de Reclamações Financeiras com RAG',
          description:
            'Assistente conversacional que utiliza Retrieval-Augmented Generation para responder perguntas sobre uma base de reclamações de clientes do setor financeiro, identificando padrões, motivos recorrentes e sentimento.',
          highlights: [
            'Pipeline de embeddings + busca vetorial sobre reclamações reais',
            'Respostas contextualizadas com citação das fontes originais',
            'Análise de sentimento e categorização automática dos motivos de reclamação',
          ],
          category: 'NLP & LLM',
        },
        'identificador-de-fraudes': {
          title: 'Identificador de Fraudes',
          description:
            'Modelo de classificação para detecção de transações fraudulentas em um dataset altamente desbalanceado, com foco em maximizar recall sem comprometer a precisão.',
          highlights: [
            'Tratamento de desbalanceamento com SMOTE e undersampling',
            'Comparação entre Logistic Regression, Random Forest e XGBoost',
            'Avaliação com AUC-ROC, precisão e recall priorizando custo de erro',
          ],
          category: 'Machine Learning',
        },
        'previsao-limite-credito': {
          title: 'Previsão de Limite de Crédito',
          description:
            'Modelo preditivo para estimar o limite de crédito ideal de um cliente com base em seu perfil financeiro, simulando uma aplicação prática para o setor bancário.',
          highlights: [
            'Engenharia de atributos a partir de dados cadastrais e comportamentais',
            'Modelos de regressão com validação cruzada e tuning de hiperparâmetros',
            'Análise de importância de variáveis para explicar decisões do modelo',
          ],
          category: 'Machine Learning',
        },
        'segmentacao-de-clientes': {
          title: 'Segmentação de Clientes',
          description:
            'Agrupamento de clientes em segmentos com base em comportamento de consumo, permitindo estratégias de marketing e relacionamento personalizadas.',
          highlights: [
            'Análise RFM (Recência, Frequência, Valor monetário)',
            'Clusterização com K-Means e definição do número ideal de clusters',
            'Visualização e interpretação de perfis de cada segmento',
          ],
          category: 'Machine Learning',
        },
        'sobrevivente-titanic': {
          title: 'Sobrevivente Titanic',
          description:
            'Projeto clássico de classificação para prever a sobrevivência de passageiros do Titanic, utilizado como base para consolidar fundamentos de análise exploratória e modelagem.',
          highlights: [
            'Análise exploratória de dados (EDA) completa',
            'Tratamento de valores faltantes e engenharia de atributos',
            'Comparação de múltiplos algoritmos de classificação',
          ],
          category: 'Machine Learning',
        },
      },
    },
    footer: {
      sectionLabel: '04. Contato',
      title: 'Vamos conversar?',
      description:
        'Estou aberto a oportunidades em Ciência de Dados, ML e Analytics. Fique à vontade para entrar em contato pelos canais abaixo.',
      email: 'E-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      builtWith: 'Construído com React, TypeScript e Tailwind CSS.',
    },
  },
  en: {
    nav: { sobre: 'About', skills: 'Skills', projetos: 'Projects', contato: 'Contact' },
    hero: {
      greeting: "Hi, I'm",
      role: 'Data Analyst @ Itaú',
      tagline: "A scientist's curiosity, a bank analyst's discipline.",
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
      terminalLines: [
        '$ whoami',
        '> data analyst at itaú — transitioning into data science',
        '$ cat goal.txt',
        '> turn financial data into decisions with machine learning',
        '$ ls projects/',
        '> titanic  fraud  credit-limit  segmentation  rag-chatbot',
        '$ status --career',
        '> [####------] migrating to Data Science... 40%',
      ],
    },
    stats: [
      { label: 'Hands-on projects', value: 5, suffix: '' },
      { label: 'Years in finance', value: 3, suffix: '+' },
      { label: 'ML models trained', value: 10, suffix: '+' },
      { label: 'Lines of code (and counting)', value: 12, suffix: 'k+' },
    ],
    about: {
      sectionLabel: '01. About me',
      title: 'From analysis to data science',
      bio: "Every day I work with data that drives real decisions — and somewhere between reports, queries and dashboards, I realized what excites me most isn't describing what happened, but predicting what's next and building something that acts on it. That's why I started my transition into Data Science: studying Machine Learning, NLP and generative AI outside work hours, turning theory into projects that tackle problems I see daily in banking — fraud, credit, churn, customer service. This portfolio is the record of that journey: each project is a business question I decided to try answering with data.",
      journeyLabel: '// my journey',
      journey: [
        {
          year: '2022 — present',
          title: 'Data Analyst at Itaú',
          description:
            'I work with financial data every day: reports, dashboards and analyses that support large-scale business decisions.',
        },
        {
          year: '2024',
          title: 'Diving into Machine Learning',
          description:
            'Started applying statistics and ML algorithms to real financial problems — fraud detection, credit and customer segmentation.',
        },
        {
          year: '2025',
          title: 'Generative AI & NLP',
          description:
            'Expanded into LLMs, embeddings and RAG architectures, building an assistant capable of analyzing customer complaints in natural language.',
        },
        {
          year: 'Next step',
          title: 'Data Scientist',
          description:
            'Looking for a role where I can combine my business view of the banking sector with statistical modeling and applied AI.',
        },
      ],
    },
    skills: {
      sectionLabel: '02. Stack',
      title: 'Tools & technologies',
      categories: {
        languages: 'Languages & Tools',
        ml: 'Machine Learning',
        nlp: 'NLP & Generative AI',
        viz: 'Visualization & Analysis',
      },
    },
    projects: {
      sectionLabel: '03. Projects',
      title: 'Data science in practice',
      featuredBadge: 'Featured project',
      githubLink: 'GitHub ↗',
      demoLink: 'Demo ↗',
      items: {
        'rag-reclamacoes-financeiras': {
          title: 'Financial Complaints Analysis Chatbot with RAG',
          description:
            'A conversational assistant that uses Retrieval-Augmented Generation to answer questions over a database of financial customer complaints, identifying patterns, recurring causes and sentiment.',
          highlights: [
            'Embedding + vector search pipeline over real complaint data',
            'Context-aware answers citing the original sources',
            'Sentiment analysis and automatic categorization of complaint reasons',
          ],
          category: 'NLP & LLM',
        },
        'identificador-de-fraudes': {
          title: 'Fraud Detector',
          description:
            'A classification model to detect fraudulent transactions in a highly imbalanced dataset, focused on maximizing recall without compromising precision.',
          highlights: [
            'Imbalance handling with SMOTE and undersampling',
            'Comparison between Logistic Regression, Random Forest and XGBoost',
            'Evaluation with AUC-ROC, precision and recall weighted by error cost',
          ],
          category: 'Machine Learning',
        },
        'previsao-limite-credito': {
          title: 'Credit Limit Prediction',
          description:
            "A predictive model to estimate a customer's ideal credit limit based on their financial profile, simulating a practical application for the banking sector.",
          highlights: [
            'Feature engineering from registration and behavioral data',
            'Regression models with cross-validation and hyperparameter tuning',
            'Feature importance analysis to explain model decisions',
          ],
          category: 'Machine Learning',
        },
        'segmentacao-de-clientes': {
          title: 'Customer Segmentation',
          description:
            'Grouping customers into segments based on consumption behavior, enabling personalized marketing and relationship strategies.',
          highlights: [
            'RFM analysis (Recency, Frequency, Monetary value)',
            'K-Means clustering and selection of the ideal number of clusters',
            "Visualization and interpretation of each segment's profile",
          ],
          category: 'Machine Learning',
        },
        'sobrevivente-titanic': {
          title: 'Titanic Survival Prediction',
          description:
            'A classic classification project to predict Titanic passenger survival, used as a foundation to consolidate exploratory data analysis and modeling fundamentals.',
          highlights: [
            'Complete exploratory data analysis (EDA)',
            'Missing value handling and feature engineering',
            'Comparison of multiple classification algorithms',
          ],
          category: 'Machine Learning',
        },
      },
    },
    footer: {
      sectionLabel: '04. Contact',
      title: "Let's talk?",
      description:
        "I'm open to opportunities in Data Science, ML and Analytics. Feel free to reach out through the channels below.",
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      builtWith: 'Built with React, TypeScript and Tailwind CSS.',
    },
  },
}
