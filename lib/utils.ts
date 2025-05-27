import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useRuntimeConfig } from '#imports'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isBlogEnabled = () => {
  const config = useRuntimeConfig()
  return config.public.blogEnabled
}
