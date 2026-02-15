'use client'

import { MessageCircle } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

export function WhatsAppButton() {
  return (
    <a
      href={BUSINESS.whatsappMessage}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea con nosotros por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-whatsapp-hover hover:shadow-xl"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-8 right-0 hidden rounded-lg bg-neutral-900 px-3 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
        Escríbenos
      </span>
    </a>
  )
}
