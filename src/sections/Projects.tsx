import { useState } from "react"
import Button from "../components/Button"
import Card from "../components/Card"
import Dialog from "../components/Dialog"
import Link from "../components/Link"
import ProjectsJson from "../sources/projects.json"
import Badge from "../components/Badge"
import type { ProjectInterface } from "../types"

export default function Projects() {
  const projects: ProjectInterface[] = ProjectsJson as ProjectInterface[]

  const [isOpen, setIsOpen] = useState(false)
  const [actualState, setActualState] = useState<ProjectInterface | null>()

  return (
    <section id='projects' className='section-padding'>
      <h3>My projects</h3>
      <div className='flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-1 md:px-10 px-4 md:-mx-10 -mx-4'>
        {projects.map((element) => (
          <div className='flex-shrink-0 w-[80dvw] max-w-120 snap-start md:scroll-ml-10 scroll-ml-4'>
            <Card.Card>
              <Card.Header
                title={element.name}
                description={element.shortDescription}
              />
              <Card.Body>
                <p className='line-clamp-4'>{element.description}</p>
              </Card.Body>
              <Card.Actions>
                {element.repo && (
                  <Link title='View repo' href={element.repo.toString()} />
                )}
                <Button.Primary
                  title='Show more'
                  onClick={() => {
                    setActualState(element)
                    setIsOpen(true)
                  }}
                />
              </Card.Actions>
            </Card.Card>
          </div>
        ))}
      </div>

      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Mi Dialog'
      >
        <Card.Card>
          <Card.Header
            title={actualState?.name || ""}
            description={actualState?.shortDescription}
          ></Card.Header>
          <Card.Body>
            <p>{actualState?.description}</p>
            <p>{actualState?.participation}</p>
            <Badge
              badges={[
                ...(actualState?.languages ?? []),
                ...(actualState?.technologies ?? []),
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
        </Card.Card>
      </Dialog>
    </section>
  )
}
