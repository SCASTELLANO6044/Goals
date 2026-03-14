'use client'

import { useActionState } from "react"
import { sendResetPasswordEmail } from "@/lib/actions"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ForgotPasswordForm = () => {
  const [state, formAction, isPending] = useActionState(sendResetPasswordEmail as any, {
    success: null,
    error: null,
  } as any)

  return (
    <form className='space-y-4' action={formAction}>
      {/* Email */}
      <div className='space-y-1'>
        <Label className='leading-5' htmlFor='userEmail'>
          Email address*
        </Label>
        <Input type='email' name="email" id='userEmail' placeholder='Enter your email address' suppressHydrationWarning={true} />
      </div>

      <Button className='w-full' type='submit' suppressHydrationWarning={true}>
        Send Reset Link
      </Button>
    </form>
  )
}

export default ForgotPasswordForm
