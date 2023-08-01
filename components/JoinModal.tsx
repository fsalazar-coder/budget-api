import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconCancel } from '@/icons/icons';
import googleIcon from '@/public/images/google-icon.webp'



export default function JoinModal(props: any) {

  const [join, setJoin] = useState({
    email: '',
    password: '',
    passwordCheck: ''
  });

  const [emailChange, setEmailChange] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);
  const [passwordCheckChange, setPasswordCheckChange] = useState(false);

  const joinModal = props.joinModal;

  const modalCloseEscapeHandle = (e: any) => {
    if (joinModal) {
      if ((e.chartCode | e.keyCode) === 27) {
        props.joinModalClose();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', modalCloseEscapeHandle);
  });

  useEffect(() => {
    joinModal ?
      (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'auto');
  }, [joinModal]);

  return (
    <div
      className={
        `w-screen h-screen fixed top-0 flex flex-col justify-center items-center bg-green-950 bg-opacity-75 transform z-[60]
        ${joinModal ?
          'scale-100 animate-[fade-in_0.50s]'
          : props.joinModalAnimationClose ?
            'scale-0 animate-[fade-out_0.30s]'
            : 'hidden'
        }`
      }
      onClick={() => props.joinModalClose()}
    >
      <div
        className={
          `container w-5/6 sm:w-2/3 lg:w-1/3 h-3/5 sm:h-3/4 lg:h-5/6 relative flex flex-col justify-start items-center bg-white rounded-md shadow-lg transform
          ${joinModal ?
            'scale-100 animate-[zoom-in_0.50s]'
            : 'scale-0 animate-[zoom-out_0.30s]'
          }`
        }
        onClick={(e) => e.stopPropagation()}
      >

        {/**icon-cancel to close modal */}
        <div className='w-6 h-6 absolute -top-5 -right-5 flex flex-col justify-center items-center rounded-full bg-white'>
          <i
            className='w-fit h-full text-gray-900 sm:text-gray-400 text-2xl sm:xl flex justify-center cursor-pointer sm:hover:text-gray-900'
            onClick={() => {
              props.joinModalClose()
            }}
          >
            <IconCancel />
          </i>
        </div>

        {/**content */}
        <div className='w-full h-full flex flex-col justify-start items-center'>
          {/**header form */}
          <div className='w-full h-fit px-4 lg:px-10 py-2 bg-green-50 border-b border-green-100 rounded-t-md'>
            <h2 className='w-full h-fit text-gray-950 text-xl md:text-2xl lg:text-3xl font-bold z-10'>
              REGISTER
            </h2>
            <h4 className='w-full h-fit text-gray-600 text-sm md:text-base lg:text-lg tracking-wide font-normal text-start flex'>
              Join to BAPI, <br /> we appreciate your trust in us
            </h4>
          </div>
          {/**form container */}
          <div className='w-full h-full px-2 lg:px-8 flex flex-col'>
            {/**form-box */}
            <form
              className='w-full h-full px-2 flex flex-col justify-between items-center'
              onSubmit={() => {
                props.joinModalCounter();
                props.joinModalClose();
              }}
            >
              {/**inputs */}
              <div className='w-full h-fit flex flex-col justify-start items-center'>
                {/**email input */}
                <div className='w-full h-fit pt-6 relative flex flex-col justify-start items-start'>
                  <label htmlFor='email'>
                    <h5
                      className={
                        `${join.email ?
                          'top-3 text-gray-600 text-xs sm:text-sm bg-white z-20'
                          : emailChange ?
                            'top-3 text-gray-600 text-xs sm:text-sm bg-white z-20'
                            : 'top-[1.80rem] sm:top-[1.90rem] text-gray-400 text-sm sm:text-base bg-none z-0'
                        } w-fit h-fit absolute left-1 sm:left-2 pl-1 pr-2 font-normal transition-all`
                      }
                    >
                      Email
                    </h5>
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className={
                      `${join.email ?
                        'border-blue-200 shadow-input'
                        : emailChange ?
                          'border-blue-400'
                          : 'border-gray-200'
                      } w-full h-fit pl-2 sm:pl-3 py-1 text-sm sm:text-base bg-transparent border sm:border-2 rounded-md outline-none transition-all z-10`
                    }
                    required
                    value={join.email}
                    onFocus={() => { setEmailChange(true) }}
                    onBlur={(e) => { setEmailChange(false) }}
                    onChange={(e) => {
                      setJoin({ ...join, email: e.target.value });
                    }}
                  />
                </div>

                {/**password input */}
                <div className='w-full h-fit pt-6 relative flex flex-col justify-start items-start'>
                  <label htmlFor='password'>
                    <h5
                      className={
                        `${join.password ?
                          'top-3 text-gray-600 text-xs sm:text-sm bg-white z-20'
                          : passwordChange ?
                            'top-3 text-gray-600 text-xs sm:text-sm bg-white z-20'
                            : 'top-[1.8rem] sm:top-[1.90rem] text-gray-400 text-sm sm:text-base bg-none z-0'
                        } w-fit h-fit absolute left-1 sm:left-2 pl-1 pr-2 font-normal transition-all`
                      }
                    >
                      Password
                    </h5>
                  </label>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    className={
                      `${join.password ?
                        'border-blue-200 shadow-input'
                        : passwordChange ?
                          'border-blue-400'
                          : 'border-gray-200'
                      } w-full h-fit pl-2 sm:pl-3 py-1 text-sm sm:text-base bg-transparent border sm:border-2 rounded-md outline-none transition-all z-10`
                    }
                    required
                    value={join.password}
                    onFocus={() => { setPasswordChange(true) }}
                    onBlur={(e) => { setPasswordChange(false) }}
                    onChange={(e) => {
                      setJoin({ ...join, password: e.target.value });
                    }}
                  />
                </div>

                {/**password-check input */}
                <div className='w-full h-fit pt-6 relative flex flex-col justify-start items-start'>
                  <label htmlFor='password-check'>
                    <h5
                      className={
                        `${join.passwordCheck ?
                          'top-3 text-gray-600 text-xs sm:text-sm bg-white z-20'
                          : passwordCheckChange ?
                            'top-3 text-gray-600 text-xs sm:text-sm bg-white z-20'
                            : 'top-[1.8rem] sm:top-[1.90rem] text-gray-400 text-sm sm:text-base bg-none z-0'
                        } w-fit h-fit absolute left-1 sm:left-2 pl-1 pr-2 font-normal transition-all`
                      }
                    >
                      Re-enter password
                    </h5>
                  </label>
                  <input
                    type='password'
                    id='password-check'
                    name='password-check'
                    className={
                      `${join.passwordCheck ?
                        'border-blue-200 shadow-input'
                        : passwordCheckChange ?
                          'border-blue-400'
                          : 'border-gray-200'
                      } w-full h-fit pl-2 sm:pl-3 py-1 text-sm sm:text-base bg-transparent border sm:border-2 rounded-md outline-none transition-all z-10`
                    }
                    required
                    value={join.password}
                    onFocus={() => { setPasswordCheckChange(true) }}
                    onBlur={(e) => { setPasswordCheckChange(false) }}
                    onChange={(e) => {
                      setJoin({ ...join, password: e.target.value });
                    }}
                  />
                </div>
              </div>

              {/**button submit form */}
              <div className='w-full h-fit flex flex-col justify-center items-center'>
                <button
                  type='submit'
                  className='w-full h-fit text-green-50 hover:text-white md:hover:font-bold bg-green-400 hover:bg-green-600 px-6 py-2 flex flex-row justify-center items-center rounded-full transition-all z-30'
                >
                  <h5 className='w-full h-fit text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg leading-none tracking-wider'>
                    Create account
                  </h5>
                </button>
              </div>

              {/**Join with google */}
              <div className='w-full h-fit flex flex-col justify-center items-center'>
                <button
                  type='submit'
                  className='w-full h-fit text-gray-400 hover:text-white md:hover:font-bold bg-green-50 border border-green-200 hover:bg-green-400 px-6 py-2 flex flex-row justify-center items-center rounded-full transition-all z-30'
                >
                  <Image
                    className='w-6 h-6'
                    src={googleIcon}
                    alt='icon-google'
                  />
                  <h5 className='w-full h-fit text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg leading-none tracking-wider'>
                    Join with Google
                  </h5>
                </button>
              </div>

              {/**link to login */}
              <div className='w-full h-fit pb-4 flex flex-row justify-center items-center'>
                <h5 className='w-fit h-fit mr-2 text-gray-600 text-sm md:text-base leading-none tracking-wider'>
                  Already registred?
                </h5>
                <p
                  className='text-green-400 hover:text-green-600 text-sm md:text-base font-semibold tracking-wider cursor-pointer'
                  onClick={props.loginModalOpen}
                >
                  Login here
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}