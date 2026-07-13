import { cookies } from 'next/headers'
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'

export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar_state')?.value !== 'false'

  return <AuthenticatedLayout defaultOpen={defaultOpen}>{children}</AuthenticatedLayout>
}