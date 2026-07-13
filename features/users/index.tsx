"use client"

import { useRouter, useSearchParams } from 'next/navigation'

import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { UsersDialogs } from './components/users-dialogs'
import { UsersPrimaryButtons } from './components/users-primary-buttons'
import { UsersProvider } from './components/users-provider'
import { UsersTable } from './components/users-table'
import { users } from './data/users'

export function Users() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const navigate = (opts: {
    search: Record<string, unknown> | ((prev: Record<string, unknown>) => Record<string, unknown>)
    replace?: boolean
  }) => {
    const current: Record<string, unknown> = {}
    searchParams.forEach((value, key) => { current[key] = value })
    const next = typeof opts.search === 'function' ? opts.search(current) : opts.search
    const params = new URLSearchParams()
    for (const [key, value] of Object.entries(next)) {
      if (value !== undefined && value !== null) {
        params.set(key, String(value))
      }
    }
    const url = `?${params.toString()}`
    if (opts.replace) router.replace(url, { scroll: false })
    else router.push(url, { scroll: false })
  }

  // Convert ReadonlyURLSearchParams to plain object for useTableUrlState
  const search: Record<string, unknown> = {}
  searchParams.forEach((value, key) => { search[key] = value })

  return (
    <UsersProvider>
      <Header fixed>
        <Search className='me-auto' />
        <ThemeSwitch />
        <ConfigDrawer />
        <ProfileDropdown />
      </Header>

      <Main className='flex flex-1 flex-col gap-4 sm:gap-6'>
        <div className='flex flex-wrap items-end justify-between gap-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>User List</h2>
            <p className='text-muted-foreground'>
              Manage your users and their roles here.
            </p>
          </div>
          <UsersPrimaryButtons />
        </div>
        <UsersTable data={users} search={search} navigate={navigate} />
      </Main>

      <UsersDialogs />
    </UsersProvider>
  )
}
