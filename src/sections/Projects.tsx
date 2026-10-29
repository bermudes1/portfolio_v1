import type { ReactNode } from 'react'
import { Section } from '../components/Section'
import { TagList } from '../components/TagList'
import type { Project } from '../content/types'
import styles from './Projects.module.css'

interface ProjectsProps {
  projects: Project[]
  /** Conteúdo extra por slug, como a demo do escalonador. */
  figures?: Partial<Record<string, ReactNode>>
}

export function Projects({ projects, figures = {} }: ProjectsProps) {
  return (
    <Section
      id="projetos"
      index="04"
      title="projetos"
      lead="Trabalhos da faculdade e projetos pessoais. O código de todos está no GitHub."
    >
      <ul role="list" className={styles.grid}>
        {projects.map((project, i) => {
          const figure = figures[project.slug]

          return (
            <li key={project.slug} className={figure ? styles.featured : undefined} data-reveal>
              <article aria-labelledby={`${project.slug}-title`} className={styles.card}>
                <div className={styles.body}>
                  <p className={styles.top}>
                    <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
                    {project.context}
                  </p>
                  <h3 id={`${project.slug}-title`} className={styles.title}>
                    {project.title}
                  </h3>
                  <p className={styles.summary}>{project.summary}</p>
                  <ul className={styles.highlights}>
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className={styles.footer}>
                    <TagList items={project.stack} label={`Tecnologias de ${project.title}`} />
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}
                      >
                        {link.label}
                        <span className="visually-hidden">
                          {' '}
                          de {project.title} (abre em nova aba)
                        </span>
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    ))}
                  </div>
                </div>
                {figure && <div className={styles.figure}>{figure}</div>}
              </article>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
