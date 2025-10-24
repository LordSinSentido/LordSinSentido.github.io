import { Github, Linkedin, MessagesSquare } from 'lucide-react'

import MyInfo from '../sources/myInformation.json'
import Link from '../components/Link'
import Section from '../components/Section'
import Container from '../components/Container'
import List from '../components/List'

export default function Contact() {
  type iconKeys = keyof typeof listIcon
  const listIcon = {
    LinkedIn: <Linkedin />,
    GitHub: <Github />
  }

  return (
    <Section.Section id='contact'>
      <Section.Title title='Contact' icon={<MessagesSquare />} />
      <Section.Body>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <Container>
            <div>
              <p className='font-normal'>Availability</p>
              <p>
                Looking for a Software Engineer? You’re in luck! I’m currently
                exploring new opportunities — don’t hesitate to get in touch.
              </p>
            </div>
            <div className='grid grid-cols-1 gap-2 sm:gap-0'>
              <div className='flex sm:flex-row flex-col'>
                <p className='grow-1 font-light'>Type of work</p>
                <p>Full-time</p>
              </div>

              <div className='flex sm:flex-row flex-col'>
                <p className='grow-1 font-light'>Work modality</p>
                <p>Flexible / On-site</p>
              </div>

              <div className='flex sm:flex-row flex-col'>
                <p className='grow-1 font-light'>Availability</p>
                <p>Immediate</p>
              </div>
            </div>
            <div>
              <p className='font-normal'>Interests</p>
              <List
                items={[
                  'Backend and microservices development',
                  'Frontend development with React',
                  'Automation and testing'
                ]}
              />
            </div>
          </Container>

          <Container>
            <p>You can contact me through these platforms:</p>
            <div>
              {MyInfo.links.map((element, index) => (
                <Link
                  title={element.title}
                  href={element.url}
                  icon={
                    element.title
                      ? listIcon[element.title as iconKeys]
                      : undefined
                  }
                  key={`Link #${index} ${element.title}`}
                />
              ))}
            </div>
          </Container>
        </div>
      </Section.Body>
    </Section.Section>
  )
}
