import { LogoIcon } from './Icons'

export const Footer = () => {
  return (
    <footer id='footer'>
      <hr className='w-11/12 mx-auto' />

      <section className='container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8'>
        <div className='col-span-full xl:col-span-2'>
          <a
            rel='noreferrer noopener'
            href='/'
            className='font-bold text-xl flex'
          >
            <LogoIcon />
            Khyber Star Laptop Center
          </a>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-lg'>Follow US</h3>
          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'
            >
              Facebook
            </a>
          </div>

          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'
            >
              Instagram
            </a>
          </div>

          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'
            >
              Whatsapp
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}
