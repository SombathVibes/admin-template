import { Suspense } from 'react'
import { SettingsAccount } from '@/features/settings/account'

export default function Page() {
  return (
    <Suspense>
      <SettingsAccount />
    </Suspense>
  )
}
