import { Hero } from '@/components/sections/Hero'
import { Benefits } from '@/components/sections/Benefits'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTABanner } from '@/components/sections/CTABanner'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { ContactForm } from '@/components/sections/ContactForm'
import { JsonLd } from '@/lib/schema'

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
      <Pricing />
      <FAQ />
      <CTABanner
        title="¿Tienes más preguntas?"
        subtitle="Nuestro equipo está listo para ayudarte a cumplir con la normativa SST"
        buttonText="Escríbenos por WhatsApp"
      />
      <ContactForm />
    </>
  )
}
