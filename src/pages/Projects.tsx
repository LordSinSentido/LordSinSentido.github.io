import { useEffect, useState } from 'react'
import { useFirestoreContext } from '@/lib/FirestoreContext'
import Dialog from '@/layers/Dialog'
import Section from '@/layers/Section'
import Stack from '@/layers/Stack'
import Title from '@/typography/Title'
import Loading from '@/ui/Loading'
import type { Project } from '@/schemas/projectSchema'

export default function Projects() {
  const { projects, getProjects } = useFirestoreContext()

  const [open, setOpen] = useState<boolean>(false)
  const [openedProject, setOpenedProject] = useState<Project | undefined>(
    undefined
  )

  const handleDialog = (project?: Project) => {
    setOpenedProject(project ?? openedProject)
    setOpen(!open)
  }

  useEffect(() => {
    getProjects()
  }, [getProjects])

  if (projects) {
    return (
      <>
        <Stack>
          <Title>Projects</Title>
          <Section>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
              {projects.map((project) => (
                <>
                  <Dialog.ProjectCard
                    project={project}
                    open={false}
                    handleDialog={() => handleDialog(project)}
                  />
                </>
              ))}
            </div>
          </Section>
        </Stack>
        <Dialog.Dialog
          project={openedProject ?? ({} as Project)}
          open={open}
          handleDialog={handleDialog}
        />
      </>
    )
  } else {
    return <Loading />
  }
}
