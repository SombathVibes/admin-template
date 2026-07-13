import { Suspense } from 'react'
import { SettingsDisplay } from '@/features/settings/display'

export default function Page() {
  return (
    <Suspense>
      <SettingsDisplay />
    </Suspense>
  )
}
