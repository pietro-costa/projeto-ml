export type ProjectIcon = 'Bot' | 'ShieldAlert' | 'CreditCard' | 'Users' | 'Ship'

export type Project = {
  slug: string
  stack: string[]
  icon: ProjectIcon
  featured?: boolean
  githubUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'rag-reclamacoes-financeiras',
    stack: ['Python', 'LangChain', 'OpenAI API', 'ChromaDB', 'Streamlit'],
    icon: 'Bot',
    featured: true,
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    slug: 'identificador-de-fraudes',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Matplotlib'],
    icon: 'ShieldAlert',
    githubUrl: '#',
  },
  {
    slug: 'previsao-limite-credito',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn'],
    icon: 'CreditCard',
    githubUrl: '#',
  },
  {
    slug: 'segmentacao-de-clientes',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Plotly'],
    icon: 'Users',
    githubUrl: '#',
  },
  {
    slug: 'sobrevivente-titanic',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    icon: 'Ship',
    githubUrl: '#',
  },
]
