import { Suspense } from 'react'
import { SignIn } from '@/features/auth/sign-in'

export default function Page() {
  return (
    <Suspense>
      <SignIn />
    </Suspense>
  )
}