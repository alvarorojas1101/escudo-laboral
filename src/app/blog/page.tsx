import type { Metadata } from 'next'
import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artículos y recursos sobre Seguridad y Salud en el Trabajo (SG-SST) para empresas en Colombia.',
}

export default function BlogPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-neutral-50 px-4 pt-24">
      <Shield className="mb-6 h-16 w-16 text-accent" strokeWidth={1.5} />
      <h1 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
        Blog — Próximamente
      </h1>
      <p className="mb-8 max-w-md text-center text-neutral-700">
        Estamos preparando artículos y recursos sobre Seguridad y Salud en el
        Trabajo para ayudarte a proteger tu empresa.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-all hover:bg-accent-hover"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al inicio
      </Link>
    </section>
  )
}
