import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

const FormLayout = () => {
  return (
    <form>
      {/* Personal Information */}
      <FieldSet className='grid grid-cols-1 gap-10 md:grid-cols-1'>
        <div>
          <FieldLegend className='mb-1.5 font-semibold'>Register a new Goal.</FieldLegend>
          <FieldDescription>Choose a new achieved goal.</FieldDescription>
        </div>

        <FieldGroup className='grid grid-cols-1 gap-6 sm:grid-cols-1 md:col-span-1'>
          <Field className='gap-2'>
            <FieldLabel htmlFor='visibility'>Goal</FieldLabel>
            <Select defaultValue='public'>
              <SelectTrigger id='visibility' className='w-full'>
                <SelectValue placeholder='Select visibility' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='public'>Public - Anyone can view</SelectItem>
                  <SelectItem value='private'>Private - Only team members</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FieldDescription className='text-xs'>Choose among the available goals</FieldDescription>
          </Field>

          <Field className='gap-2 sm:col-span-2'>
            <FieldLabel htmlFor='goal-request-textarea'>Tell us why should we award you this goal.</FieldLabel>
            <Textarea placeholder='Describe what have you accomplished to achieve this goal...' id='goal-request-textarea' rows={4} />
            <FieldDescription className='text-xs'>
              This description is for internal use and won&apos;t be displayed publicly.
            </FieldDescription>
          </Field>
        </FieldGroup>

      </FieldSet>

      <Separator className='my-10' />

      <div className='flex justify-end gap-3'>
        <Button type='submit' className='w-full sm:w-auto'>
          Send Request
        </Button>
      </div>
    </form>
  )
}

export default FormLayout
