import { useRef } from 'react'
import { profile } from './content/profile'
import { SchedulerFigure } from './features/scheduler/SchedulerFigure'
import { useReveal } from './hooks/useReveal'
import { Footer } from './layout/Footer'
import { Header, type NavItem } from './layout/Header'
import { About } from './sections/About'
import { Award } from './sections/Award'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Stats } from './sections/Stats'

const NAV: NavItem[] = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export function App() {
  const main = useRef<HTMLElement>(null)
  useReveal(main)

  return (
    <>
      <a href="#sobre" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header monogram="fb" nav={NAV} location={profile.location} />
      <main ref={main}>
        <Hero profile={profile} />
        <Stats stats={profile.stats} />
        <About profile={profile} />
        <Experience items={profile.experience} />
        <Award award={profile.award} />
        <Projects projects={profile.projects} figures={{ escalonador: <SchedulerFigure /> }} />
        <Skills profile={profile} />
        <Contact contact={profile.contact} />
      </main>
      <Footer name={profile.name} repositoryUrl={profile.repositoryUrl} />
    </>
  )
}
