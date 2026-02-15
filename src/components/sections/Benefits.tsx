'use client'

import { motion } from 'framer-motion'
import { Shield, FileText, Handshake, CheckCircle } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { BENEFITS } from '@/lib/constants'
import type { ReactNode } from 'react'

const iconMap: Record<string, ReactNode> = {
  shield: <Shield className="h-8 w-8" />,
  'file-text': <FileText className="h-8 w-8" />,
  handshake: <Handshake className="h-8 w-8" />,
  'check-circle': <CheckCircle className="h-8 w-8" />,
}

export function Benefits() {
  return (
    <SectionWrapper id="beneficios">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
          ¿Por qué elegir Escudo Laboral?
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-700">
          Nos especializamos en micro y pequeñas empresas. Conocemos tus
          necesidades y te damos soluciones prácticas y efectivas.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((benefit, i) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
          >
            <div className="mb-4 inline-flex rounded-xl bg-accent-light p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
              {iconMap[benefit.icon]}
            </div>
            <h3 className="mb-2 text-lg font-bold text-neutral-900">
              {benefit.title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-700">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
