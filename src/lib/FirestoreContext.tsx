import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode
} from 'react'
import {
  fetchInformation,
  fetchJobs,
  fetchProjects,
  fetchSkills
} from '@/lib/firestoreActions'
import type { Information } from '@/schemas/informationSchema'
import type { Skill } from '@/schemas/skillsSchema'
import type { Job } from '@/schemas/jobSchema'
import type { Project } from '@/schemas/projectSchema'

interface FirestoreContextProps {
  children: ReactNode
}

interface FirestoreDataContextValue {
  information: Information | null
  skills: Skill[] | null
  jobs: Job[] | null
  projects: Project[] | null
  getInformation: () => Promise<void>
  getSkills: () => Promise<void>
  getJobs: () => Promise<void>
  getProjects: () => Promise<void>
}

const FirestoreDataContext = createContext<
  FirestoreDataContextValue | undefined
>(undefined)

export function FirestoreContext({ children }: FirestoreContextProps) {
  const [information, setInformation] = useState<Information | null>(null)
  const [skills, setSkills] = useState<Skill[] | null>(null)
  const [jobs, setJobs] = useState<Job[] | null>(null)
  const [projects, setProjects] = useState<Project[] | null>(null)

  const getInformation = useCallback(async () => {
    if (information) return
    const retrievedInformation = await fetchInformation()
    setInformation(retrievedInformation)
  }, [information])

  const getSkills = useCallback(async () => {
    if (skills) return
    const retrievedSkills = await fetchSkills()
    setSkills(retrievedSkills)
  }, [skills])

  const getJobs = useCallback(async () => {
    if (jobs) return
    const retrievedJobs = await fetchJobs()
    setJobs(retrievedJobs)
  }, [jobs])

  const getProjects = useCallback(async () => {
    if (projects) return
    const retrievedProjects = await fetchProjects()
    setProjects(retrievedProjects)
  }, [projects])

  return (
    <FirestoreDataContext.Provider
      value={{
        information,
        getInformation,
        skills,
        getSkills,
        jobs,
        getJobs,
        projects,
        getProjects
      }}
    >
      {children}
    </FirestoreDataContext.Provider>
  )
}

export const useFirestoreContext = () => {
  const context = useContext(FirestoreDataContext)
  if (context === undefined)
    throw new Error(`You are not using the FirestoreContext`)
  return context
}
