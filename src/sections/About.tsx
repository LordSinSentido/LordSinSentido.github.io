import MyInformationJson from "../sources/myInformation.json"
import Experience from "../sources/experience.json"

import type { MyInformationInterface, ExperienceInterface } from "../types"
import Collapsable from "../components/Collapsable"
import Button from "../components/Button"
import { useState } from "react"

export default function About() {
  const information: MyInformationInterface =
    MyInformationJson as MyInformationInterface
  const experience: ExperienceInterface[] = Experience as ExperienceInterface[]

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [companyInformation, setCompanyInformation] = useState<string>("")

  return (
    <section id='about' className='section-padding grid grid-cols-12'>
      <h3 className='col-span-12 lg:col-span-3'>About me</h3>
      <div className='col-span-12 lg:col-span-9'>
        <div className='grid grid-cols-1 gap-5'>
          <p className='text-title'>{information.hero}</p>
          <p>{information.description}</p>
          <ul className='list-inside'>
            {information.skills.map((element: String) => (
              <li className='flex flex-row gap-2'>
                <span>&#8208;</span>
                {element}
              </li>
            ))}
          </ul>
          <div className='flex flex-row gap-2 flex-nowrap overflow-y-scroll'>
            {experience.map((element) => (
              <Button.Image
                image={element.image}
                alt={element.company}
                isActive={companyInformation == element.description}
                onClick={() => {
                  if (!isOpen) {
                    setCompanyInformation(element.description)
                    setIsOpen(true)
                  } else {
                    if (companyInformation != element.description) {
                      setCompanyInformation(element.description)
                    } else {
                      setCompanyInformation("")
                      setIsOpen(false)
                    }
                  }
                }}
              />
            ))}
          </div>
          <Collapsable.Body isOpen={isOpen}>
            <p className='bg-dark-surface-container-low p-5 rounded-lg'>
              {companyInformation}
            </p>
          </Collapsable.Body>
        </div>
      </div>
    </section>
  )
}
