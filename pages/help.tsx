import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';                           /***Navbar component***/
import Header from '@/components/Header';                           /***Header component***/
import Footer from '@/components/Footer';                           /***Footer component***/



export default function Help(): JSX.Element {

  const [screenNarrow, setScreenNarrow] = useState(Boolean);                             /***State screen narrow: true or false***/

  const screenNarrowHandle: any = () => {
    window.innerWidth < 768 ?
      setScreenNarrow(true)
      : setScreenNarrow(false);
  };

  useEffect(() => {
    window.addEventListener('resize', screenNarrowHandle);
    screenNarrowHandle()
  });


  return (
    <main className='w-full h-auto relative font-montserrat select-none overflow-x-hidden animate-[appear_1.0s]'>
      {/***Navbar fixed, animated background***/}
      <Navbar
        screenNarrow={screenNarrow}
      />
      {/***Header section***/}
      <section
        id='header-section'
        className='w-full h-[350px] sm:h-[420px] lg:h-[615px]'
      >
        <Header />
      </section>
      {/***Content section***/}
      <section
        id='content-section'
        className='w-full h-auto bg-gradient-to-b from-white to-gray-200'
      >
        <h1 className='text-5xl text-gray-800 font-bold'>
          HELP
        </h1>
      </section>
      {/***Contact section***/}
      <section
        id='footer-section'
        className='w-full h-auto bg-gray-200'
      >
        <Footer />
      </section>
    </main>
  )
}