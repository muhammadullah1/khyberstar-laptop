import { Button } from './ui/button'
import { LocationMap } from './Location'
import { FacebookIcon, WhatsAppIcon } from './Icons'

export const Hero = () => {
  return (
    <section className='container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10'>
      <div className='text-center lg:text-start space-y-6'>
        <main className='text-3xl font-bold'>
          <h1 className='inline'>
            <span className='inline bg-gradient-to-r from-[#656765]  to-[#7a8b7f] text-transparent bg-clip-text'>
              Ethical hacker Facebook account,WhatsApp account,all account and
              Internet problems
            </span>{' '}
          </h1>{' '}
          <h2 className=' py-5'>
            <span className='inline bg-gradient-to-r from-[#4d534c] via-[#4f614e] to-[#03a3d7] text-transparent bg-clip-text'>
              contact me Khyber star Laptop's cntr 2nd floor shop no#4 shabaz
              plaza bara market khyber Peshawar.
            </span>{' '}
          </h2>
        </main>

        <div className='space-y-4 md:space-y-0 md:space-x-4'>
          <Button
            className='w-full md:w-1/3'
            onClick={() => window.open('https://wa.me/+923343434300', '_blank')}
          >
            <WhatsAppIcon /> <span className='px-2'> WhatsApp Me</span>
          </Button>

          <Button
            className='w-full md:w-1/3'
            onClick={() => window.open('https://www.facebook.com/khyberstarcentre', '_blank')}
          >
            <FacebookIcon /> <span className='px-2'>Facebook</span>
          </Button>
        </div>
      </div>

      <div className='w-full h-auto'>
        <LocationMap />
      </div>
    </section>
  )
}
