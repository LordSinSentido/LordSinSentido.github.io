import Section from '../components/Section'
import Experience from '../sources/experience.json'
import type { ExperienceInterface } from '../types'
import Card from '../components/Card'
import Collapsable from '../components/Collapsable'
import List from '../components/List'
import { BriefcaseBusiness } from 'lucide-react'

export default function WorkExperience() {
  const experience: ExperienceInterface[] = Experience as ExperienceInterface[]

  return (
    <Section.Section id='experience'>
      <Section.Title title='Experience' icon={<BriefcaseBusiness />} />
      <Section.Body>
        {experience.map((item, index) => (
          <Card.Card key={`Section #${index} ${item.company}`}>
            <Card.Header title={item.company} description={item.location} />
            <Card.Body>
              <p>{item.description}</p>
              <Collapsable.Collapsable>
                {item?.goals && <List items={item.goals} />}
              </Collapsable.Collapsable>
            </Card.Body>
          </Card.Card>
        ))}
      </Section.Body>
    </Section.Section>
  )
}
