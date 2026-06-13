import { useState } from 'react'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const sizes = {
  lg: 'h-40 w-40 sm:h-48 sm:w-48',
  md: 'h-28 w-28',
}

export default function Avatar({ size = 'lg', className = '' }: { size?: keyof typeof sizes; className?: string }) {
  const [error, setError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative shrink-0 ${sizes[size]} ${className}`}
    >
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent-indigo via-accent-teal to-accent-violet opacity-50 blur-md" />
      {!error ? (
        <img
          src="/foto.jpg"
          alt="Foto de perfil"
          onError={() => setError(true)}
          className="relative h-full w-full rounded-full object-cover ring-2 ring-white"
        />
      ) : (
        <div className="relative h-full w-full rounded-full bg-bg-card ring-2 ring-white flex items-center justify-center shadow-sm">
          <User className="h-1/2 w-1/2 text-slate-400" strokeWidth={1.5} />
        </div>
      )}
    </motion.div>
  )
}
