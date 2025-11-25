import { NextResponse, NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { Project } from '@/types/Project'

export async function GET(request: NextRequest) {
  try {
    if (process.env.NODE_ENV === 'production') {
      const supabase = await createClient()
      const result = await supabase.from('projects').select()

      if (result.statusText !== 'OK')
        throw new Error('Something went wrong when retrieving data')

      const data = result.data as Project[]
      return NextResponse.json(data)
    } else {
      const result = [
        {
          name: 'Example',
          shortDescription: 'Some texto',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error doloribus magni laboriosam nisi mollitia nostrum vitae soluta aliquid? Et incidunt cupiditate quidem ea blanditiis mollitia quo dignissimos porro temporibus libero!',
          participation:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui minus facilis dignissimos est obcaecati ab doloribus. Tempore quod cumque dolorem quia, culpa ut ipsa temporibus amet quasi impedit aliquam error.',
          languages: ['Value'],
          technologies: ['Value'],
          repo: '/',
          demo: '/'
        }
      ]
      return NextResponse.json([...result])
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
