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
    <Section id="projetos" index="04" title="Projetos">
      <ol role="list" className={styles.list}>
        {projects.map((project, i) => (
          <li key={project.slug} className={styles.project}>
            <article aria-labelledby={`${project.slug}-title`} data-reveal>
              <p className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 id={`${project.slug}-title`} className={styles.title}>
                {project.title}
              </h3>
              <p className={styles.context}>{project.context}</p>
              <p className={styles.summary}>{project.summary}</p>
              <ul className={styles.highlights}>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {figures[project.slug] && (
                <div className={styles.figure}>{figures[project.slug]}</div>
              )}
              <div className={styles.footer}>
                <TagList items={project.stack} label={`Tecnologias de ${project.title}`} />
                <ul role="list" className={styles.links}>
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                        <span className="visually-hidden">
                          {' '}
                          de {project.title} (abre em nova aba)
                        </span>
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
