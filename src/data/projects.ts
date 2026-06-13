export type ProjectIcon = 'Bot' | 'ShieldAlert' | 'CreditCard' | 'Users' | 'Ship'

export type Project = {
  slug: string
  title: string
  description: string
  highlights: string[]
  stack: string[]
  category: 'Machine Learning' | 'NLP & LLM'
  icon: ProjectIcon
  featured?: boolean
  githubUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'rag-reclamacoes-financeiras',
    title: 'Chatbot de Análise de Reclamações Financeiras com RAG',
    description:
      'Assistente conversacional que utiliza Retrieval-Augmented Generation para responder perguntas sobre uma base de reclamações de clientes do setor financeiro, identificando padrões, motivos recorrentes e sentimento.',
    highlights: [
      'Pipeline de embeddings + busca vetorial sobre reclamações reais',
      'Respostas contextualizadas com citação das fontes originais',
      'Análise de sentimento e categorização automática dos motivos de reclamação',
    ],
    stack: ['Python', 'LangChain', 'OpenAI API', 'ChromaDB', 'Streamlit'],
    category: 'NLP & LLM',
    icon: 'Bot',
    featured: true,
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    slug: 'identificador-de-fraudes',
    title: 'Identificador de Fraudes',
    description:
      'Modelo de classificação para detecção de transações fraudulentas em um dataset altamente desbalanceado, com foco em maximizar recall sem comprometer a precisão.',
    highlights: [
      'Tratamento de desbalanceamento com SMOTE e undersampling',
      'Comparação entre Logistic Regression, Random Forest e XGBoost',
      'Avaliação com AUC-ROC, precisão e recall priorizando custo de erro',
    ],
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Matplotlib'],
    category: 'Machine Learning',
    icon: 'ShieldAlert',
    githubUrl: '#',
  },
  {
    slug: 'previsao-limite-credito',
    title: 'Previsão de Limite de Crédito',
    description:
      'Modelo preditivo para estimar o limite de crédito ideal de um cliente com base em seu perfil financeiro, simulando uma aplicação prática para o setor bancário.',
    highlights: [
      'Engenharia de atributos a partir de dados cadastrais e comportamentais',
      'Modelos de regressão com validação cruzada e tuning de hiperparâmetros',
      'Análise de importância de variáveis para explicar decisões do modelo',
    ],
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn'],
    category: 'Machine Learning',
    icon: 'CreditCard',
    githubUrl: '#',
  },
  {
    slug: 'segmentacao-de-clientes',
    title: 'Segmentação de Clientes',
    description:
      'Agrupamento de clientes em segmentos com base em comportamento de consumo, permitindo estratégias de marketing e relacionamento personalizadas.',
    highlights: [
      'Análise RFM (Recência, Frequência, Valor monetário)',
      'Clusterização com K-Means e definição do número ideal de clusters',
      'Visualização e interpretação de perfis de cada segmento',
    ],
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Plotly'],
    category: 'Machine Learning',
    icon: 'Users',
    githubUrl: '#',
  },
  {
    slug: 'sobrevivente-titanic',
    title: 'Sobrevivente Titanic',
    description:
      'Projeto clássico de classificação para prever a sobrevivência de passageiros do Titanic, utilizado como base para consolidar fundamentos de análise exploratória e modelagem.',
    highlights: [
      'Análise exploratória de dados (EDA) completa',
      'Tratamento de valores faltantes e engenharia de atributos',
      'Comparação de múltiplos algoritmos de classificação',
    ],
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    category: 'Machine Learning',
    icon: 'Ship',
    githubUrl: '#',
  },
]
