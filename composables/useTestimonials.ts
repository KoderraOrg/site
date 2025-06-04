export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating: number
}

export const useTestimonials = () => {
  const testimonials = ref<Testimonial[]>([
    {
      id: 1,
      name: "André Silva",
      role: "CEO",
      company: "SightVision",
      content: "Ótimo trabalho! Desenvolveram um site incrível para a minha empresa. Recomendo a todos que buscam uma presença online de alta qualidade.",
      rating: 5
    },
    {
      id: 2,
      name: "Andrade Climatização",
      role: "",
      company: "Andrade Climatização",
      content: "Profissionais extremamente competentes. O projeto foi entregue no prazo e superou nossas expectativas.",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Fundadora",
      company: "Digital Plus",
      content: "Excelente atendimento e soluções personalizadas. Recomendo para qualquer empresa que busca crescimento digital.",
      rating: 5
    }
  ])

  const currentIndex = ref(0)

  const nextTestimonial = () => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
  }

  const prevTestimonial = () => {
    currentIndex.value = currentIndex.value === 0 ? testimonials.value.length - 1 : currentIndex.value - 1
  }

  const goToTestimonial = (index: number) => {
    currentIndex.value = index
  }

  return {
    testimonials: readonly(testimonials),
    currentIndex: readonly(currentIndex),
    nextTestimonial,
    prevTestimonial,
    goToTestimonial
  }
} 