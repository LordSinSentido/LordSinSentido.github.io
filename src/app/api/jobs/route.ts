import { NextResponse, NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { Job } from '@/types/Job'

export async function GET(request: NextRequest) {
  try {
    if (process.env.NODE_ENV === 'production') {
      const supabase = await createClient()
      const result = await supabase.from('jobs').select()

      if (result.statusText !== 'OK')
        throw new Error('Something went wrong when retrieving data')

      const data = result.data as Job[]
      return NextResponse.json(data)
    } else {
      const result = [
        {
          company: 'Example',
          location: 'Location',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum commodi ipsum dolorum temporibus ducimus nisi, rerum ullam nam culpa at architecto. Quae voluptas facere ducimus tenetur. Neque blanditiis a corporis?.',
          goals: ['First row.', 'Second row.', 'Third row.', 'Fourth row.']
        }
      ]

      return NextResponse.json([...result])
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
