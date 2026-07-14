import { Suspense } from 'react'
import { HelpCenter } from '@/features/help-center'

export default function Page() { 
  return (
    <Suspense>
      <HelpCenter />
    </Suspense>
  )
}
