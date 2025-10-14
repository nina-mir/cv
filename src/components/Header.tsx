// components/Header.tsx (or app/components/Header.tsx)

export default function Header() {
    return (
      <header 
        className="bg-white py-2 md:py-4 px-4 border-b border-gray-200"
        aria-labelledby="contact-heading"
      >
        <div className="container mx-auto max-w-4xl 
        flex flex-row justify-between md:flex-col-reverse">
          <h1 
            id="contact-heading" 
            className="text-4xl font-bold text-gray-900 
            mb-2 flex flex-col md:inline-block"
          >
            Nina Mir 
            <span className="font-light text-xl text-gray-600 mb-4"> Web Engineer</span>
          </h1>
          <address className="not-italic self-center md:w-full">
            <div 
            className="font-mono flex flex-col-reverse items-end-safe
            flex-wrap gap-x-3 gap-y-2 text-stone-400 text-sm 
            sm:text-base md:flex-row">
              <span>SF, CA</span>
              <span className="separator hidden md:inline" aria-hidden="true">|</span>
              <span>
                <a 
                  href="tel:+14154804402"
                  className="hover:text-blue-600 transition-colors"
                >
                  +1 415 480 4402
                </a>
              </span>
              <span className="separator hidden md:inline" aria-hidden="true">|</span>
              <span>
                <a 
                  href="mailto:ninamirf@gmail.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  ninamirf@gmail.com
                </a>
              </span>
            </div>
          </address>
        </div>
      </header>
    )
  }

