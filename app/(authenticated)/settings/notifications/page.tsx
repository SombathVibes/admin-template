import { Suspense } from 'react'
import { SettingsNotifications } from '@/features/settings/notifications'

export default function Page() {
  return (
    <Suspense>
      <SettingsNotifications />
    </Suspense>
  )
}
