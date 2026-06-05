import FormLayout from '@/components/shadcn-studio/blocks/form-layout-02/form-layout-02'
import { createClientForServer } from '@/lib/supabase/server'

type GoalOption = {
  id: string
  title: string
}

export default async function FormLayoutPage() {
  const supabase = await createClientForServer()
  const { data: goals, error } = await supabase
    .from('goals')
    .select('id, title')
    .order('title', { ascending: true })

  if (error) {
    throw error
  }

  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <FormLayout goals={(goals ?? []) as GoalOption[]} />
      </div>
    </div>
  )
}
