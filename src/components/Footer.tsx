export const Footer = () => {
  return (
    <footer id='footer'>
      <hr className='w-11/12 mx-auto' />

      {/* <section className='container py-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8'> */}
      <section className='container mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-6'>
        {/* <div className='sm:col-span-full col-span-2'> */}
        {/* <div className="col-span-2"> */}
        <div className="items-center">
          <a
            rel='noreferrer noopener'
            href='/'
            className='font-bold text-xl flex'
          >
            Khyber Star Laptop Center
          </a>
        </div>

        {/* <div className='flex flex-row xl:justify-end col-span-1 md:col-span-4 gap-10'> */}

        <div className="flex flex-row gap-10">
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
