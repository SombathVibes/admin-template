"use client"

import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ConfigDrawer } from '@/components/config-drawer'

export function HelpCenter() {
  return (
    <>
      <Header>
        <Search className='me-auto' />
        <ThemeSwitch />
        <ConfigDrawer />
        <ProfileDropdown />
      </Header>
      <Main fixed>
        <div>
          <h1 className='text-2xl font-bold tracking-tight'>
            Help Center
          </h1>
          <p className='text-muted-foreground'>
            Find answers to your questions and learn how to use the platform.
          </p>
        </div>
        <div className='mt-8 max-w-3xl space-y-6'>
          <section>
            <h2 className='mb-2 text-lg font-semibold'>Frequently Asked Questions</h2>
            <div className='space-y-4 text-sm text-muted-foreground'>
              <div className='rounded-lg border p-4'>
                <p className='font-bold'>How do I change my theme?</p>
                <p className='mt-1'>You can use the Theme Switcher in the top right header, or go to Settings &gt; Appearance.</p>
              </div>
              <div className='rounded-lg border p-4'>
                <p className='font-bold'>How do I update my profile?</p>
                <p className='mt-1'>Click on your avatar in the top right or bottom left, and select Profile.</p>
              </div>
              <div className='rounded-lg border p-4'>
                <p className='font-bold'>How do I switch the dashboard language?</p>
                <p className='mt-1'>Go to Settings &gt; Appearance and select your preferred language from the Language dropdown. Our dashboard supports both English and Khmer.</p>
              </div>
            </div>
          </section>
        </div>
      </Main>
    </>
  )
}
