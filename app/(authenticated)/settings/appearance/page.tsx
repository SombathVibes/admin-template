import { Suspense } from 'react'
import { SettingsAppearance } from '@/features/settings/appearance'

export default function Page() {
  return (
    <Suspense>
      <SettingsAppearance />
    </Suspense>
  )
}
