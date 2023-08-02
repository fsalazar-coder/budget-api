import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';                           /***Navbar component***/
import Header from '@/components/Header';                           /***Header component***/
import Features from '@/components/Features';                       /***About description component***/
import phoneFeature1 from '@/public/images/phone-features-1.png';
import phoneFeature2 from '@/public/images/phone-features-2.png';
import phoneFeature3 from '@/public/images/phone-features-3.png';
import Footer from '@/components/Footer';                           /***Footer component***/
import LoginModal from '@/components/LoginModal';
import JoinModal from '@/components/JoinModal';



export default function Home(): JSX.Element {

  const [screenNarrow, setScreenNarrow] = useState(Boolean);                             /***State screen narrow: true or false***/
  const [loginModal, setLoginModal] = useState(false);                                   /***State login modal open: true or false***/
  const [loginModalAnimationClose, setLoginModalAnimationClose] = useState(false);
  const [joinModal, setJoinModal] = useState(false);                                     /***State join modal open: true or false***/
  const [joinModalAnimationClose, setJoinModalAnimationClose] = useState(false);

  const featuresArray: any = [
    {
      subtitle: 'GET YOUR OVERVIEW BACK',
      title: "It's all about you",
      description: "If you have ever tried tracking money before, you know that it can be extremely frustrating with the wrong tools. Monefy helps and empowers you by breaking down your expenses in a simple, intuitive, and understandable way. With Monefy, you'll quickly start to identify key spending patterns and effectively begin saving money.",
      image: phoneFeature1,
      alt: 'image-feature-1',
      textStart: false,
      darkBackground: false
    },
    {
      subtitle: 'LIGHTNING FAST TRACKING',
      title: "Add records in a flash",
      description: 'Monefy simplifies the process for entering transactions to make it quick, easy, and painless, Within a few seconds ... or even faster Expense tracking has never been simpler!',
      image: phoneFeature2,
      alt: 'image-feature-2',
      textStart: true,
      darkBackground: true
    },
    {
      subtitle: 'MAKE IT YOUR OWN',
      title: "You're in full control",
      description: 'We have carefully curated the default categories to help you start tracking essential expenses right from the word “go.” No time-consuming setup process. No need to manually type in each category. Still feeling the need for some customization? We got you covered. Easily change the default categories, add new ones, select the currency you want to use, and choose the most convenient language for you, all through Monefy’s intuitive interface.',
      image: phoneFeature3,
      alt: 'image-feature-3',
      textStart: false,
      darkBackground: false
    }
  ];

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
        className='w-full h-auto'
      >
        {
          featuresArray.map((features: any, index: any) => {
            return (
              <Features
                key={index}
                subtitle={features.subtitle}
                title={features.title}
                description={features.description}
                image={features.image}
                textStart={features.textStart}
                darkBackground={features.darkBackground}
              />
            )
          })
        }
      </section>
      {/***Contact section***/}
      <section
        id='footer-section'
        className='w-full h-auto bg-gray-200'
      >
        <Footer
          joinModalOpen={() => setJoinModal(true)}                                       /**props to open join modal */
        />
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