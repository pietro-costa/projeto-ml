import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer id="contato" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-mono text-sm text-accent-green mb-2">04. Contato</h2>
        <h3 className="text-3xl font-bold mb-4">Vamos conversar?</h3>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          Estou aberto a oportunidades em Ciência de Dados, ML e Analytics. Fique à vontade para entrar em
          contato pelos canais abaixo.
        </p>
        <div className="flex justify-center gap-6 font-mono text-sm">
          <a href={`mailto:${profile.links.email}`} className="hover:text-accent-cyan transition-colors">
            E-mail
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent-cyan transition-colors">
            LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-accent-cyan transition-colors">
            GitHub
          </a>
        </div>
        <p className="mt-12 text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Construído com React, TypeScript e Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
