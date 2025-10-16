import { Github, Linkedin } from "lucide-react"

import MyInfo from "../sources/myInformation.json"
import Link from "../components/Link"

export default function Contact() {
  const listIcon = {
    LinkedIn: <Linkedin />,
    GitHub: <Github />,
  }

  return (
    <section id='contact' className='section-padding grid grid-cols-12'>
      <h3 className='col-span-12 lg:col-span-3'>Contact me</h3>
      <div className='col-span-12 lg:col-span-9 grid md:gap-10 gap-5'>
        <div className=''>
          <p className='text-title'>Do you need a software engineer?</p>
          <p>
            Well, you are lucky. Currently I'm finding new job opportunities,
            and if you think I can provide, do not hesite and let's get in
            touch!
          </p>
        </div>
        <div className=''>
          <p className=''>You can reach me on these platforms</p>
          <div className='flex'>
            {MyInfo.links.map((element) => (
              <Link
                title={element.title}
                href={element.url}
                icon={listIcon[element.title]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
