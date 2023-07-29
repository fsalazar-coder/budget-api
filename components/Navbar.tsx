import { useRef, useEffect, useState } from 'react';
import NavbarTopSlider from './NavbarTopSlider';



export default function Navbar(props: any) {

  const navbarIndicator = useRef(null);                                                  /***Navbar indicator Ref***/
  const [transparentBackground, setTransparentBackground] = useState(true);              /***Transparent background state: boolean***/
  const [navbarNarrowActive, setNavbarNarrowActive] = useState(false);
  const [navbarFirstUse, setNavbarFirstUse] = useState(false);

  const sectionActived = props.sectionActived;                                           /***Section active in the moment (UseState)***/
  const screenNarrow = props.screenNarrow;
  const animations = [                                                                   /***Animation sequence array: animate to each element***/
    'md:animate-[appear-top_2.0s_ease]',
    'md:opacity-100 md:animate-[appear-top_2.0s_ease]',
    'md:opacity-100 md:animate-[appear-top_2.5s_ease]',
    'md:opacity-100 md:animate-[appear-top_3.0s_ease]',
    'md:opacity-100 md:animate-[appear-top_3.5s_ease]',
    'md:opacity-100 md:animate-[appear-top_4.0s_ease]',
    'md:opacity-100 md:animate-[appear-top_4.5s_ease]',
    'md:opacity-100 md:animate-[appear-top_5.0s_ease]',
    'md:opacity-100 md:animate-[special_5.0s_ease]'
  ];
  const navbar = [                                                                       /***Navbar elements array-object***/
    {
      text: 'Login'
    },
    {
      text: 'Join'
    }
  ];

  useEffect(() => {
    const backgroundScrollHandle = () => {
      scrollY > 5 ?
        setTransparentBackground(false)
        : setTransparentBackground(true);
    }
    document.addEventListener('scroll', backgroundScrollHandle);
  }, []);

  return (
    <>
      {/**navbar */}
      <div
        className={
          `${transparentBackground ?
            `${navbarFirstUse ?
              'animate-[disappear-color_0.50s_ease-out]'
              : ''} bg-transparent shadow-none`
            : 'bg-gray-900 shadow-md animate-[appear-color_0.50s_ease-in]'
          } w-full h-10 lg:h-12 xl:h-14 2xl:h-16 fixed flex flex-row justify-center items-center z-50`
        }>
        <div className='container w-full h-full px-2 lg:px-8 flex flex-row justify-between items-center'>
          {/**SVG logo (left) */}
          <div className={
            `${screenNarrow ?
              'w-2/3 sm:w-1/2'
              : `md:w-1/6 ${animations[0]}`
            } h-full flex flex-row justify-start items-center z-30`
          }>
            <div className={
              `${screenNarrow ?
                'w-1/4'
                : 'w-2/5'
              } h-full text-white flex flex-col justify-center`
            }>
              <svg
                viewBox="0 0 885 305"
              >
                <path
                  fill='currentColor'
                  fillOpacity="1"
                  stroke='none'
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M0,190      
                L150,20
                L380,105
                L610,20
                L460,190
                L230,105
                Z"
                />
                <path
                  fill='white'
                  fillOpacity="1"
                  stroke='none'
                  strokeWidth={12}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M75,285      
                L225,115
                L455,200
                L685,115
                L535,285
                L305,200
                Z"
                />
                <path
                  fill='none'
                  fillOpacity="0"
                  stroke='currentColor'
                  strokeWidth={10}
                  strokeOpacity={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M785,0      
                L785,305"
                />
              </svg>
            </div>
            <div className={
              `${screenNarrow ?
                'w-[45%]'
                : 'w-3/5'
              } h-full text-white flex flex-col justify-center`
            }>
              <svg
                fill='currentColor'
                viewBox="0 0 766 133"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,133.000000) scale(0.100000,-0.100000)"
                  stroke="none"
                >
                  <path d="M0 1246 l0 -84 288 -4 c315 -5 347 -10 443 -70 139 -85 130 -258 -17 -340 -72 -40 -167 -58 -316 -58 l-128 0 0 160 0 160 -135 0 -135 0 0 -245 0 -245 271 0 c148 0 303 5 342 11 203 30 377 132 440 259 33 67 32 206 -2 273 -33 63 -96 123 -177 169 -138 79 -258 98 -626 98 l-248 0 0 -84z" />
                  <path d="M1230 1245 l0 -85 545 0 545 0 0 85 0 85 -545 0 -545 0 0 -85z" />
                  <path d="M2953 1320 c-211 -22 -395 -126 -460 -258 -24 -48 -28 -70 -28 -137 0 -67 4 -89 28 -137 36 -74 109 -139 211 -188 139 -67 172 -72 529 -77 l317 -5 0 85 0 85 -297 4 c-291 4 -300 4 -364 29 -86 33 -122 62 -154 123 -30 59 -31 97 -6 151 24 53 64 88 132 120 78 35 167 44 447 45 l242 0 0 85 0 85 -262 -1 c-145 -1 -296 -5 -335 -9z" />
                  <path d="M5060 1250 l-135 -78 -3 -326 -2 -326 545 0 545 0 0 85 0 85 -405 0 -405 0 -2 319 -3 319 -135 -78z" />
                  <path d="M6293 1252 l-133 -77 0 -327 0 -328 135 0 135 0 0 405 c0 223 -1 405 -2 405 -2 -1 -63 -36 -135 -78z" />
                  <path d="M6570 926 l0 -406 140 0 140 0 0 190 0 191 213 -144 c116 -79 218 -147 225 -151 9 -6 12 19 12 112 l0 119 -337 229 c-185 126 -349 237 -365 247 l-28 19 0 -406z" />
                  <path d="M7390 924 l0 -404 135 0 135 0 0 328 -1 327 -134 76 -135 77 0 -404z" />
                  <path d="M3985 1028 c-93 -161 -197 -341 -231 -400 l-63 -108 138 0 138 0 133 230 c73 127 133 230 135 230 1 0 62 -103 136 -230 l134 -230 138 0 139 0 -14 22 c-8 13 -113 193 -233 401 l-218 377 -81 0 -82 0 -169 -292z" />
                  <path d="M1230 770 l0 -250 545 0 545 0 0 85 0 85 -410 0 -411 0 3 78 3 77 288 3 287 2 0 85 0 85 -425 0 -425 0 0 -250z" />
                  <path d="M113 334 c-12 -3 -36 -18 -53 -34 -24 -22 -30 -36 -30 -69 0 -54 32 -85 103 -101 29 -7 60 -17 70 -22 39 -20 7 -58 -51 -58 -16 0 -51 11 -78 25 -27 14 -50 25 -51 25 -2 0 -3 -18 -3 -40 0 -51 20 -60 137 -60 83 0 86 1 119 34 26 26 34 42 34 70 0 51 -34 80 -120 101 -72 18 -89 34 -64 60 21 21 82 19 129 -5 22 -11 41 -20 42 -20 2 0 3 18 3 39 0 28 -5 41 -17 46 -24 9 -142 15 -170 9z" />
                  <path d="M5594 321 c-59 -27 -88 -78 -88 -155 1 -118 51 -166 172 -166 95 0 112 9 112 60 l0 39 -36 -24 c-42 -29 -73 -31 -113 -10 -66 34 -66 166 0 200 40 21 69 19 112 -10 l37 -26 0 41 c0 37 -3 42 -35 56 -47 19 -112 17 -161 -5z" />
                  <path d="M1830 300 c0 -29 1 -30 50 -30 l50 0 0 -135 0 -135 45 0 45 0 0 135 0 135 50 0 c49 0 50 1 50 30 l0 30 -145 0 -145 0 0 -30z" />
                  <path d="M3697 172 c-31 -86 -57 -161 -57 -165 0 -5 19 -7 42 -5 38 3 43 6 52 36 9 32 9 32 71 32 62 0 62 0 71 -32 9 -31 13 -33 57 -36 l47 -3 -19 48 c-10 26 -38 101 -61 166 l-43 117 -51 0 -51 0 -58 -158z m139 -16 c6 -24 4 -26 -30 -26 -41 0 -42 0 -19 66 l17 49 12 -31 c7 -17 16 -43 20 -58z" />
                  <path d="M7350 165 l0 -165 40 0 40 0 0 54 c0 85 18 88 74 11 l48 -65 54 0 54 0 -68 88 -69 88 21 26 c12 14 41 49 64 77 l44 51 -50 0 c-49 0 -49 0 -103 -70 -30 -38 -57 -69 -61 -70 -5 0 -8 32 -8 70 l0 70 -40 0 -40 0 0 -165z" />
                  <path d="M1020 150 l0 -50 55 0 55 0 0 50 0 50 -55 0 -55 0 0 -50z" />
                  <path d="M2830 150 l0 -50 50 0 50 0 0 50 0 50 -50 0 -50 0 0 -50z" />
                  <path d="M4680 150 l0 -50 55 0 55 0 0 50 0 50 -55 0 -55 0 0 -50z" />
                  <path d="M6510 150 l0 -50 50 0 50 0 0 50 0 50 -50 0 -50 0 0 -50z" />
                </g>
              </svg>
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
                          <div className='w-5 h-[2px] absolute top-[11px] bg-white transform rotate-45 transition-all' />
                          <div className='w-5 h-[2px] absolute top-[11px] bg-white transform -rotate-45 transition-all' />
                          <div className='w-5 h-[2px] absolute bg-white transform scale-0 transition-all' />
                          <div className='w-5 h-[2px] absolute bottom-[11px] bg-white transform -rotate-45 transition-all' />
                          <div className='w-5 h-[2px] absolute bottom-[11px] bg-white transform rotate-45 transition-all' />
                        </>
                        :
                        <>
                          <div className='w-5 h-[2px] absolute top-1 bg-white transition-all' />
                          <div className='w-5 h-[2px] absolute top-1 bg-white transition-all' />
                          <div className='w-5 h-[2px] absolute bg-white transition-all' />
                          <div className='w-5 h-[2px] absolute bottom-1 bg-white transition-all' />
                          <div className='w-5 h-[2px] absolute bottom-1 bg-white transition-all' />
                        </>
                    }
                  </div>
                  :
                  /**Navbar wide */
                  <>
                    {/**Navbar elements***/}
                    <ul className='w-full h-full flex flex-row justify-end items-center'>
                      <li className='w-fit h-fit px-2 flex flex-row justify-center items-start list-none'>
                        <h2 className='w-full h-2/3 py-1 px-8 text-white bg-gray-600 text-sm lg:text-base xl:text-lg font-semibold tracking-wider flex flex-row justify-center items-center border border-gray-400 rounded-full hover:bg-green-400 hover:border-white cursor-pointer transition-all'>
                          Login
                        </h2>
                      </li>
                      <li className='w-fit h-fit px-2 flex flex-row justify-center items-start list-none'>
                        <h2 className='w-full h-2/3 py-1 px-8 text-gray-400 text-sm lg:text-base xl:text-lg font-semibold tracking-wider flex flex-row justify-center items-center border border-gray-400 rounded-full hover:text-green-400 hover:border-green-400 cursor-pointer transition-all'>
                          Join
                        </h2>
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
            navbar={navbar}
            screenNarrow={screenNarrow}
            navbarNarrowActive={navbarNarrowActive}
            navbarFirstUse={navbarFirstUse}
            sectionActived={sectionActived}
            navbarNarrowActiveFalse={() => { setNavbarNarrowActive(false) }}
          />
          : ''
      }
    </>
  )
}