'use client'

import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'

export const  LocationMap = () => {
  const redirectToLocation = () => {
    window.open('https://maps.app.goo.gl/ga7mZ1pKedvJgmgH8', '_blank')
  }

  return (
    <section className=''>
        <div className='rounded-lg shadow-lg overflow-hidden'>
          {/* <div className='aspect-w-16 aspect-h-9'> */}
          <div className='aspect-retro h-52'>
            <iframe
              className='w-full h-full'
              title='Khyber Start Laptop Center'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4229.257113551468!2d71.4608695!3d33.915964599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d91b6e8270f2cb%3A0x81ad3b3f535f2404!2skhyber%20star%20Laptop%20Center!5e1!3m2!1sen!2s!4v1738861623828!5m2!1sen!2s'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='px-6 py-3'>
            <p className='text-gray-600 mb-4'>
              Visit us at our Shop
            </p>
            <Button onClick={redirectToLocation} className='w-full'>
              <MapPin className='mr-2 h-4 w-4' />
              Open in Google Maps
            </Button>
          </div>
        </div>
    </section>
  )
}
