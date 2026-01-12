import type { Easing } from 'motion'

export const animationDuration: number = 0.2
export const animationEase: Easing = 'easeOut'
export type Status = 'loading' | 'done' | 'failed'
export type Type = 'full-time' | 'part-time' | 'freelance' | 'contract'
export type Modality = 'hybrid' | 'on-site' | 'remote'
export type EmailStatus = 'waiting' | 'sending' | 'sent' | 'failed'
export const typeMap: Record<Type, string> = {
  'full-time': 'Full-time',
  'part-time': 'Part-time',
  contract: 'Contract',
  freelance: 'Freelance'
}
export const modalityMap: Record<Modality, string> = {
  'on-site': 'On-site',
  hybrid: 'Hybrid',
  remote: 'Remote'
}
