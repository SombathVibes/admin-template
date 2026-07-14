"use client"

import { useForm } from 'react-hook-form'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { useNightShift } from '@/context/theme-provider'
import {
  Form,
  FormControl,
  FormDescription,
  FormLabel,
} from '@/components/ui/form'

export function DisplayForm() {
  const { isNightShiftEnabled, toggleNightShift, nightShiftIntensity, setNightShiftIntensity } = useNightShift()

  // Using a standard form hook without zod since these are instant-apply global contexts
  const form = useForm()

  return (
    <Form {...form}>
      <form className='space-y-8'>
        {/* Night Shift */}
        <div className='flex flex-col space-y-4 rounded-lg border p-4'>
          <div className='flex flex-row items-center justify-between'>
            <div className='space-y-0.5'>
              <FormLabel className='text-base'>Night Shift</FormLabel>
              <FormDescription>
                Protect your eyes by shifting the colors of your display to the
                warmer end of the color spectrum.
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                checked={isNightShiftEnabled}
                onCheckedChange={toggleNightShift}
                aria-label='Toggle night shift'
              />
            </FormControl>
          </div>
          <div className='space-y-3 pt-2'>
            <div className='flex items-center justify-between'>
              <FormLabel className={!isNightShiftEnabled ? 'text-muted-foreground' : ''}>Color Temperature</FormLabel>
              <span className='text-xs text-muted-foreground'>{nightShiftIntensity}%</span>
            </div>
            <Slider
              disabled={!isNightShiftEnabled}
              value={[nightShiftIntensity]}
              onValueChange={(val) => setNightShiftIntensity(val[0])}
              max={100}
              step={1}
              aria-label='Night shift color temperature'
            />
          </div>
        </div>

      </form>
    </Form>
  )
}
