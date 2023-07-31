import { useEffect, useState } from 'react';
import NavbarTopSlider from './NavbarTopSlider';
import LoginModal from './LoginModal';



export default function Navbar(props: any) {

  const [transparentBackground, setTransparentBackground] = useState(true);              /***Transparent background state: boolean***/
  const [navbarNarrowActive, setNavbarNarrowActive] = useState(false);
  const [navbarFirstUse, setNavbarFirstUse] = useState(false);
  const [loginModal, setLoginModal] = useState(false);                                   /***State login modal open: true or false***/
  const [loginModalAnimationClose, setLoginModalAnimationClose] = useState(false);

  const screenNarrow = props.screenNarrow;
  const navbarElementText = ['About US', 'Help', 'Blog'];

  useEffect(() => {
    const backgroundScrollHandle = () => {
      scrollY > 5 ?
        setTransparentBackground(false)
        : setTransparentBackground(true)
    }
    document.addEventListener('scroll', backgroundScrollHandle);
  });

  return (
    <>
      {/**navbar */}
      <div
        className={
          `${transparentBackground ?
            `${navbarFirstUse ?
              'animate-[disappear-color_0.50s_ease-out]'
              : ''} bg-transparent`
            : 'bg-green-100 border border-green-200 animate-[appear-color_0.50s_ease-in]'
          } w-full h-10 lg:h-12 xl:h-14 2xl:h-16 fixed flex flex-row justify-center items-center z-50`
        }>
        <div className='container w-full h-full px-2 lg:px-8 flex flex-row justify-between items-center'>

          {/**Logo (left) */}
          <div className={
            `${screenNarrow ?
              'w-2/3 sm:w-1/2'
              : `md:w-1/6`
            } h-full flex flex-row justify-start items-center z-30`
          }>
            <div className='w-full h-full text-lg flex flex-col justify-center'>
              <h2 className='text-green-400 font-light'>
                <a className='text-green-600 font-bold'>
                  B
                </a>
                udget-
                <a className='text-green-600 font-bold'>
                  API
                </a>
              </h2>
            </div>
          </div>

          {/**Navbar (right) */}
          <div className={
            `${screenNarrow ?
              'w-1/3'
              : 'w-5/6'
            } h-full flex flex-row justify-end items-center z-30`
          }>
            <nav className={
              `${screenNarrow ?
                'w-fit flex flex-col justify-end'
                : 'w-5/6 relative'
              } h-full`
            }>
              {
                screenNarrow ?
                  /**Navbar narrow: Menu hamburguer, navbar elements hidden-visible */
                  <div
                    className='w-5 h-6 relative flex flex-col justify-center items-center transition-all'
                    onClick={() => {
                      setNavbarNarrowActive(!navbarNarrowActive);
                      setNavbarFirstUse(true);
                    }}
                  >
                    {
                      navbarNarrowActive ?
                        <>
                          <div className='w-5 h-[2px] absolute top-[4px] bg-green-600 transform rotate-45 transition-all' />
                          <div className='w-5 h-[2px] absolute top-[4px] bg-green-600 transform -rotate-45 transition-all' />
                          <div className='w-5 h-[2px] absolute bg-green-600 transform scale-0 transition-all' />
                          <div className='w-5 h-[2px] absolute bottom-[17px] bg-green-600 transform -rotate-45 transition-all' />
                          <div className='w-5 h-[2px] absolute bottom-[17px] bg-green-600 transform rotate-45 transition-all' />
                        </>
                        :
                        <>
                          <div className='w-5 h-[2px] absolute -top-1 bg-green-600 transition-all' />
                          <div className='w-5 h-[2px] absolute -top-1 bg-green-600 transition-all' />
                          <div className='w-5 h-[2px] absolute top-[3px] bg-green-600 transition-all' />
                          <div className='w-5 h-[2px] absolute bottom-3 bg-green-600 transition-all' />
                          <div className='w-5 h-[2px] absolute bottom-3 bg-green-600 transition-all' />
                        </>
                    }
                  </div>
                  :
                  /**Navbar wide */
                  <>
                    {/**Navbar elements***/}
                    <ul className='w-full h-full flex flex-row justify-end items-center'>
                      {
                        navbarElementText.map((elementText: string, index: any) => {
                          return (
                            <li
                              key={index}
                              className='w-fit h-fit px-2 flex flex-row justify-center items-start list-none'>
                              <h2 className='w-full h-2/3 py-1 px-8 text-green-400 hover:text-green-600 text-sm lg:text-base xl:text-lg font-light hover:font-bold tracking-wider flex flex-row justify-center items-center cursor-pointer transition-all'>
                                {elementText}
                              </h2>
                            </li>
                          )
                        })
                      }
                      <li className='w-fit h-fit px-2 flex flex-row justify-center items-start list-none'>
                        <button
                          className='w-auto h-auto text-white px-6 py-3 flex flex-row justify-center items-center transition-all z-30'
                          onClick={() => setLoginModal(true)}
                        >
                          <h3 className='w-full h-2/3 py-1 px-8 text-green-400 hover:text-green-600 text-sm lg:text-base xl:text-lg font-semibold tracking-wider flex flex-row justify-center items-center border border-green-400 hover:border-green-600 rounded-full cursor-pointer transition-all'>
                            Login
                          </h3>
                        </button>
                      </li>

                      <li className='w-fit h-fit px-2 flex flex-row justify-center items-start list-none'>
                        <h3 className='w-full h-2/3 py-1 px-8 text-green-50 hover:text-white bg-green-400 hover:bg-green-600 text-sm lg:text-base xl:text-lg font-semibold tracking-wider flex flex-row justify-center items-center border border-green-400 hover:border-green-600 rounded-full cursor-pointer transition-all'>
                          Join
                        </h3>
                      </li>
                    </ul>
                  </>
              }
            </nav>
          </div>
        </div>
      </div>

      {/**navbar-top-slider to narrow screen: hidden-visible */}
      {
        screenNarrow ?
          <NavbarTopSlider
            screenNarrow={screenNarrow}
            navbarNarrowActive={navbarNarrowActive}
            navbarFirstUse={navbarFirstUse}
            navbarNarrowActiveFalse={() => { setNavbarNarrowActive(false) }}
          />
          : ''
      }

      {/**Hidden-visible login modal */}
      <LoginModal                                                                        /***Contact modal component***/
        loginModal={loginModal}
        loginModalAnimationClose={loginModalAnimationClose}
        loginModalClose={() => {
          setLoginModal(false);
          setLoginModalAnimationClose(true);
        }}
      />
    </>
  )
}