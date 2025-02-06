export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />
      <section className="container mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="items-center">
          <a rel="noreferrer noopener" href="/" className="font-bold text-xl flex">
            Khyber Star Laptop Center
          </a>
        </div>

        <div className="flex flex-row gap-10">
          <div>
            <button
              onClick={() => window.open('https://www.facebook.com/khyberstarcentre', '_blank')}
              className="opacity-60 hover:opacity-100"
            >
              Facebook
            </button>
          </div>

          <div>
            <button
              onClick={() => window.open('https://wa.me/+923343434300', '_blank')}
              className="opacity-60 hover:opacity-100"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};
