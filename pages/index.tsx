import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';                           /***Navbar component***/
import Header from '@/components/Header';                           /***Header component***/
import Features from '@/components/Features';                       /***About description component***/
import Footer from '@/components/Footer';                           /***Footer component***/
import LoginModal from '@/components/LoginModal';
import JoinModal from '@/components/JoinModal';



export default function Home(): JSX.Element {

  const [screenNarrow, setScreenNarrow] = useState(Boolean);                             /***State screen narrow: true or false***/
  const [loginModal, setLoginModal] = useState(false);                                   /***State login modal open: true or false***/
  const [loginModalAnimationClose, setLoginModalAnimationClose] = useState(false);
  const [joinModal, setJoinModal] = useState(false);                                     /***State join modal open: true or false***/
  const [joinModalAnimationClose, setJoinModalAnimationClose] = useState(false);

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
        loginModalOpen={() => setLoginModal(true)}                                       /**props to open login modal */
        joinModalOpen={() => setJoinModal(true)}                                         /**props to open join modal */
      />
      {/***Header section***/}
      <section
        id='header-section'
        className='w-full h-[350px] sm:h-[420px] lg:h-[615px]'
      >
        <Header
          joinModalOpen={() => setJoinModal(true)}                                         /**props to open join modal */
        />
      </section>
      {/***Content section***/}
      <section
        id='content-section'
        className='w-full h-auto bg-gradient-to-b from-white to-gray-200'
      >
        <Features />
      </section>
      {/***Contact section***/}
      <section
        id='footer-section'
        className='w-full h-auto bg-gray-200'
      >
        <Footer />
      </section>

      {/**Hidden-visible login modal */}
      <LoginModal                                                                        /***Login modal component***/
        loginModal={loginModal}
        loginModalAnimationClose={loginModalAnimationClose}
        loginModalClose={() => {
          setLoginModal(false);
          setLoginModalAnimationClose(true);
        }}
        joinModalOpen={() => {
          setLoginModal(false);
          setLoginModalAnimationClose(true);
          setJoinModal(true);
        }}
      />

      {/**Hidden-visible join modal */}
      <JoinModal                                                                         /***Join modal component***/
        joinModal={joinModal}
        joinModalAnimationClose={joinModalAnimationClose}
        joinModalClose={() => {
          setJoinModal(false);
          setJoinModalAnimationClose(true);
        }}
        loginModalOpen={() => {
          setJoinModal(false);
          setJoinModalAnimationClose(true);
          setLoginModal(true);
        }}
      />
    </main>
  )
}