import { NextResponse, NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { Skill } from '@/types/Skill'

export async function GET(request: NextRequest) {
  try {
    if (process.env.NODE_ENV === 'production') {
      const supabase = await createClient()
      const result = await supabase.from('skills').select()

      if (result.statusText !== 'OK')
        throw new Error('Something went wrong when retrieving data')

      const data = result.data as Skill[]
      const grouped = data.reduce<Record<string, string[]>>((acc, item) => {
        const key = item.type
        if (!acc[key]) acc[key] = []
        acc[key].push(item.name)
        return acc
      }, {})

      return NextResponse.json(grouped)
    } else {
      return NextResponse.json({
        tool: ['Docker'],
        language: ['JavaScript'],
        frontend: ['React'],
        backend: ['Node.JS']
      })
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
