export const profile = {
  name: 'Seu Nome',
  links: {
    github: 'https://github.com/seu-usuario',
    linkedin: 'https://linkedin.com/in/seu-usuario',
    email: 'seu-email@exemplo.com',
  },
  skills: {
    languages: ['Python', 'SQL', 'Git', 'Excel/Power BI'],
    ml: ['Scikit-learn', 'XGBoost', 'Pandas', 'NumPy'],
    nlp: ['LangChain', 'Embeddings', 'RAG', 'OpenAI API'],
    viz: ['Matplotlib', 'Seaborn', 'Plotly', 'Power BI'],
  },
} as const

export type SkillCategory = keyof typeof profile.skills
