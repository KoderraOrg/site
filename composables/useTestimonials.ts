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
      name: "Maria Silva",
      role: "CEO",
      company: "TechStart",
      content: "A consultoria transformou completamente nossa estratégia digital. Resultados excepcionais em apenas 3 meses!",
      rating: 5
    },
    {
      id: 2,
      name: "João Santos",
      role: "Diretor de Marketing",
      company: "Inovação Corp",
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