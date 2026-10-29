export interface Link {
  label: string
  href: string
}

export interface Project {
  slug: string
  title: string
  /** Onde o projeto nasceu: disciplina, trabalho em grupo, projeto pessoal. */
  context: string
  summary: string
  highlights: string[]
  stack: string[]
  links: Link[]
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface Fact {
  label: string
  value: string
}

export interface Profile {
  name: string
  shortName: string
  role: string
  headline: string
  intro: string
  about: string[]
  facts: Fact[]
  projects: Project[]
  skills: SkillGroup[]
  contact: {
    pitch: string
    /** Deixe vazio para esconder o botão de e-mail. */
    email?: string
    links: Link[]
  }
  repositoryUrl: string
}
