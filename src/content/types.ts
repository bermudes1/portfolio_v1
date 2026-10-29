export interface Link {
  label: string
  href: string
}

/** Período em texto livre, do jeito que vai aparecer na tela ("jun 2025 a ago 2026"). */
export type Period = string

export interface Photo {
  src: string
  alt: string
}

export interface Stat {
  value: string
  label: string
}

export interface Experience {
  role: string
  org: string
  period: Period
  current?: boolean
  description: string[]
}

export interface Education {
  course: string
  school: string
  place: string
  period: Period
  note?: string
}

export interface Project {
  slug: string
  title: string
  /** Onde o projeto nasceu: disciplina, trabalho em dupla, projeto pessoal. */
  context: string
  summary: string
  highlights: string[]
  stack: string[]
  links: Link[]
}

export interface Award {
  place: string
  title: string
  date: string
  description?: string
  /** Sem foto, o bloco aparece só com o texto. */
  photo?: Photo
}

export type SkillIcon = 'code' | 'data' | 'web' | 'tools'

export interface SkillGroup {
  title: string
  icon: SkillIcon
  items: string[]
}

export interface Profile {
  name: string
  fullName: string
  greeting: string
  headline: string
  intro: string
  /** Linha curta ao lado do ponto aceso na abertura. */
  status: string
  aboutImage: Photo
  stats: Stat[]
  location: { label: string; timeZone: string }
  about: string[]
  experience: Experience[]
  education: Education[]
  award: Award
  projects: Project[]
  skills: SkillGroup[]
  certifications: string[]
  languages: { name: string; level: string }[]
  contact: {
    pitch: string
    email: string
    links: Link[]
  }
  repositoryUrl: string
}
