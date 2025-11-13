import React, { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Dialog from '../components/Dialog'
import Link from '../components/Link'
import ProjectsJson from '../sources/projects.json'
import Badge from '../components/Badge'
import type { ProjectInterface } from '../types'
import Section from '../components/Section'
import Carousel from '../components/Carousel'
import { Proportions } from 'lucide-react'
import Page from '../components/Page'

export default function Projects() {
  const projects: ProjectInterface[] = ProjectsJson as ProjectInterface[]

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [actualState, setActualState] = useState<ProjectInterface | null>()

  const items: React.ReactElement[] = projects.map((item) => (
    <Card.Card>
      <Card.Header title={item.name} description={item.shortDescription} />
      <Card.Body>
        <p className='line-clamp-4'>{item.description}</p>
      </Card.Body>
      <Card.Actions>
        {item.repo && <Link title='View repo' href={item.repo.toString()} />}
        <Button.Primary
          title='Show more'
          onClick={() => {
            setActualState(item)
            setIsOpen(true)
          }}
        />
      </Card.Actions>
    </Card.Card>
  ))

  return (
    <Section.Section id='projects'>
      <Section.Title title='Projects' icon={<Proportions />} />
      <Carousel items={items} />

      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Mi Dialog'
      >
        <Page>
          <Card.Header
            title={actualState?.name || ''}
            description={actualState?.shortDescription}
          ></Card.Header>
          <Card.Body>
            <p>{actualState?.description}</p>
            <p>{actualState?.participation}</p>
            <Badge
              badges={[
                ...(actualState?.languages ?? []),
                ...(actualState?.technologies ?? [])
              ]}
            />
          </Card.Body>
          <Card.Actions>
            <div className='flex flex-wrap justify-end'>
              {actualState?.demo && (
                <Link title='View project' href={actualState.demo.toString()} />
              )}
              {actualState?.repo && (
                <Link title='View repo' href={actualState.repo.toString()} />
              )}
            </div>
            <Button.Primary title='Close' onClick={() => setIsOpen(false)} />
          </Card.Actions>
        </Page>
      </Dialog>
    </Section.Section>
  )
}
