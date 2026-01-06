import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import type { Information } from '@/schemas/informationSchema'
import type { Job } from '@/schemas/jobSchema'
import type { Skill } from '@/schemas/skillsSchema'
import type { Project } from '@/schemas/projectSchema'

const uid = import.meta.env.VITE_FIREBASE_UID ?? ''

export const fetchInformation = async () => {
  try {
    console.log(`Getting user information`)
    const documentReference = doc(db, 'users', uid)
    const document = await getDoc(documentReference)
    return { ...document.data() } as Information
  } catch (error) {
    console.error(`Can't get information`)
    return null
  }
}

export const fetchSkills = async () => {
  try {
    console.log(`Getting user skills`)
    const skillsCollection = collection(db, 'users', uid, 'skills')
    const skillsDocuments = await getDocs(skillsCollection)
    return skillsDocuments.docs.map(
      (document) => ({ id: document.id, ...document.data() } as Skill)
    )
  } catch (error) {
    console.error(`Can't get skills`)
    return null
  }
}

export const fetchJobs = async () => {
  try {
    console.log(`Getting user jobs`)
    const jobsCollection = collection(db, 'users', uid, 'jobs')
    const jobsDocuments = await getDocs(jobsCollection)
    const jobs = jobsDocuments.docs.map(
      (document) => ({ id: document.id, ...document.data() } as Job)
    )
    return jobs.sort((a, b) => Number(b.startingYear) - Number(a.startingYear))
  } catch (error) {
    console.error(`Can't get jobs`)
    return null
  }
}

export const fetchProjects = async () => {
  try {
    console.log(`Getting user projects`)
    const projectsCollection = collection(db, 'users', uid, 'projects')
    const projectsDocuments = await getDocs(projectsCollection)
    return projectsDocuments.docs.map(
      (document) => ({ id: document.id, ...document.data() } as Project)
    )
  } catch (error) {
    console.error(`Can't get projects`)
    return null
  }
}
