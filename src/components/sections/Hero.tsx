'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown, Shield, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { BUSINESS } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-light pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              {BUSINESS.decree} · {BUSINESS.resolution}
            </span>
            <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
              Tu empresa protegida,{' '}
              <span className="text-accent">tu equipo seguro</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/70">
              Implementamos el SG-SST para micro y pequeñas empresas en
              Colombia. Cumple con la normativa sin complicaciones y evita multas
              de hasta 500 SMMLV.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                href={BUSINESS.whatsappMessage}
                external
                icon={<MessageCircle className="h-5 w-5" />}
              >
                Agenda tu asesoría gratuita
              </Button>
              <Button variant="secondary" size="lg" href="#planes" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Ver planes
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-accent" />
                Sin multas ni sanciones
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-accent" />
                Implementación en 4-6 semanas
              </span>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative mx-auto w-full max-w-md">
              {/* Main shield */}
              <div className="relative flex aspect-square items-center justify-center rounded-3xl bg-white/5 backdrop-blur-sm">
                <Shield className="h-48 w-48 text-accent/30" strokeWidth={1} />
                <Shield className="absolute h-32 w-32 text-accent/60" strokeWidth={1.5} />
                <Shield className="absolute h-16 w-16 text-accent" strokeWidth={2} />
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <p className="text-xs font-medium text-white/80">Empresas protegidas</p>
                  <p className="text-2xl font-bold text-white">100+</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#beneficios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 transition-colors hover:text-white/70"
        aria-label="Desplázate para ver más"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  )
}
