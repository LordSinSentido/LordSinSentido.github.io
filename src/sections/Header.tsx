import MyInformationJson from '../sources/myInformation.json'

import type { MyInformationInterface } from '../types'

export default function Header() {
  const information: MyInformationInterface =
    MyInformationJson as MyInformationInterface

  return (
    <header
      id='home'
      className='shadow-lg bg-center bg-cover bg-[url(/header.jpg)]'
    >
      <div className='py-25 px-10 flex flex-col-reverse justify-center items-center md:flex-row gap-10 text-dark-on-background bg-dark-background/75'>
        <div className='max-w-2xl text-center md:text-left'>
          <h1 className='text-4xl capitalize'>{information.name}</h1>
          <h2 className='text-2xl font-extralight tracking-wide uppercase'>
            {information.degree}
          </h2>
          <p>{information.description}</p>
        </div>
        <div className='size-50'>
          <img
            className='rounded-full drop-shadow-md'
            src='https://avatars.githubusercontent.com/u/57022857?v=4'
          />
        </div>
      </div>
    </header>
  )
}
