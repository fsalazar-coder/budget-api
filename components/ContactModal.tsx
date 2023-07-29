import { useState, useEffect } from 'react';
import SectionTitles from './SectionTitles';
import { IconCancel, IconArrowRight } from '@/icons/icons';



export default function ContactModal(props: any) {

  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [nameChange, setNameChange] = useState(false);
  const [emailChange, setEmailChange] = useState(false);
  const [subjectChange, setSubjectChange] = useState(false);
  const [messageChange, setMessageChange] = useState(false);
  const contactModal = props.contactModal;

  const modalCloseEscapeHandle = (e: any) => {
    if (contactModal) {
      if ((e.chartCode | e.keyCode) === 27) {
        props.contactModalClose();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', modalCloseEscapeHandle);
  });

  useEffect(() => {
    contactModal ?
      (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'auto');
  }, [contactModal]);

  return (
    <div
      className={
        `w-screen h-screen fixed top-0 flex flex-col justify-center items-center bg-black bg-opacity-75 transform z-[60]
        ${contactModal ?
          'scale-100 animate-[fade-in_0.50s]'
          : props.contactModalAnimationClose ?
            'scale-0 animate-[fade-out_0.30s]'
            : 'hidden'
        }`
      }
      onClick={() => props.contactModalClose()}
    >
      <div
        className={
          `container w-5/6 sm:w-2/3 lg:w-1/2 h-3/5 sm:h-3/4 lg:h-5/6 relative flex flex-col justify-start items-center bg-white rounded-md transform
          ${contactModal ?
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
              props.contactModalClose()
            }}
          >
            <IconCancel />
          </i>
        </div>
        {/**content */}
        <div className='w-full h-full px-1 md:px-4 flex flex-col justify-start items-center'>
          {/**Section title */}
          <div className='w-full h-fit pt-10 sm:pt-[3.25rem] md:pt-16 lg:pt-20 xl:pt-28 z-0'>
            <SectionTitles
              title=''
              titleWatermark='CONTACT'
            />
          </div>
          {/**title */}
          <h2 className='w-full h-fit pb-2 -mt-8 sm:-mt-[3.25rem] md:-mt-[3.75rem] lg:-mt-[4.35rem] xl:-mt-[4.70rem] text-blue-900 text-md sm:text-lg lg:text-xl font-bold text-center z-10'>
            Any questions?
          </h2>
          {/**form container */}
          <div className='w-full h-full px-2 sm:px-4 lg:px-8'>
            {/**form-box */}
            <form
              className='w-full h-full px-4 flex flex-col justify-start items-center'
              onSubmit={() => {
                props.contactModalCounter();
                props.contactModalClose();
                props.successModalOpen();
              }}
            >
              {/**inputs */}
              <div className='w-full h-fit flex flex-col justify-start items-center'>
                {/**name input */}
                <div className='w-full h-fit pt-3 relative flex flex-col justify-start items-start'>
                  <label htmlFor='name'>
                    <h5
                      className={
                        `${contact.name ?
                          'top-0 text-gray-600 text-xs sm:text-sm bg-white z-20'
                          : nameChange ?
                            'top-0 text-gray-600 text-xs sm:text-sm bg-white z-20'
                            : 'top-[1.05rem] sm:top-[1.15rem] text-gray-400 text-sm sm:text-base bg-none z-0'
                        } w-fit h-fit absolute left-1 sm:left-2 pl-1 pr-2 font-normal transition-all`
                      }
                    >
                      Name
                    </h5>
                  </label>
                  <input
                    type='name'
                    id='name'
                    name='name'
                    className={
                      `${contact.name ?
                        'border-blue-200 shadow-input'
                        : nameChange ?
                          'border-blue-400'
                          : 'border-gray-200'
                      } w-full h-fit pl-2 sm:pl-3 py-1 text-sm sm:text-base bg-transparent border sm:border-2 rounded-md outline-none transition-all z-10`
                    }
                    required
                    value={contact.name}
                    onFocus={() => { setNameChange(true) }}
                    onBlur={(e) => { setNameChange(false) }}
                    onChange={(e) => {
                      setContact({ ...contact, name: e.target.value });
                    }}
                  />
                </div>
                {/**email input */}
                <div className='w-full h-fit pt-6 relative flex flex-col justify-start items-start'>
                  <label htmlFor='email'>
                    <h5
                      className={
                        `${contact.email ?
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
                      `${contact.email ?
                        'border-blue-200 shadow-input'
                        : emailChange ?
                          'border-blue-400'
                          : 'border-gray-200'
                      } w-full h-fit pl-2 sm:pl-3 py-1 text-sm sm:text-base bg-transparent border sm:border-2 rounded-md outline-none transition-all z-10`
                    }
                    required
                    value={contact.email}
                    onFocus={() => { setEmailChange(true) }}
                    onBlur={(e) => { setEmailChange(false) }}
                    onChange={(e) => {
                      setContact({ ...contact, email: e.target.value });
                    }}
                  />
                </div>
                {/**subject input */}
                <div className='w-full h-fit pt-6 relative flex flex-col justify-start items-start'>
                  <label htmlFor='subject'>
                    <h5
                      className={
                        `${contact.subject ?
                          'top-3 text-gray-600 text-xs sm:text-sm bg-white z-20'
                          : subjectChange ?
                            'top-3 text-gray-600 text-xs sm:text-sm bg-white z-20'
                            : 'top-[1.8rem] sm:top-[1.90rem] text-gray-400 text-sm sm:text-base bg-none z-0'
                        } w-fit h-fit absolute left-1 sm:left-2 pl-1 pr-2 font-normal transition-all`
                      }
                    >
                      Subject
                    </h5>
                  </label>
                  <input
                    type='subject'
                    id='subject'
                    name='subject'
                    className={
                      `${contact.subject ?
                        'border-blue-200 shadow-input'
                        : subjectChange ?
                          'border-blue-400'
                          : 'border-gray-200'
                      } w-full h-fit pl-2 sm:pl-3 py-1 text-sm sm:text-base bg-transparent border sm:border-2 rounded-md outline-none transition-all z-10`
                    }
                    required
                    value={contact.subject}
                    onFocus={() => { setSubjectChange(true) }}
                    onBlur={(e) => { setSubjectChange(false) }}
                    onChange={(e) => {
                      setContact({ ...contact, subject: e.target.value });
                    }}
                  />
                </div>
                {/**message input */}
                <div className='w-full h-fit pt-6 relative flex flex-col justify-start items-start'>
                  <label htmlFor='message'>
                    <h5
                      className={
                        `${contact.message ?
                          'top-3 text-gray-600 text-xs sm:text-sm bg-white z-20'
                          : messageChange ?
                            'top-3 text-gray-600 text-xs sm:text-sm bg-white z-20'
                            : 'top-[1.8rem] sm:top-[1.90rem] text-gray-400 text-sm sm:text-base bg-none z-0'
                        } w-fit h-fit absolute left-1 sm:left-2 pl-1 pr-2 font-normal transition-all`
                      }
                    >
                      Message
                    </h5>
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    className={
                      `${contact.message ?
                        'border-blue-200 shadow-input'
                        : messageChange ?
                          'border-blue-400'
                          : 'border-gray-200'
                      } w-full h-fit pl-2 sm:pl-3 py-1 text-sm sm:text-base bg-transparent border sm:border-2 rounded-md outline-none overflow-y-auto transition-all z-10`
                    }
                    required
                    value={contact.message}
                    onFocus={() => { setMessageChange(true) }}
                    onBlur={(e) => { setMessageChange(false) }}
                    onChange={(e) => {
                      setContact({ ...contact, message: e.target.value });
                    }}
                  />
                </div>
              </div>
              {/**button submit form */}
              <div className='w-full h-full flex flex-col justify-center items-center'>
                <button
                  type='submit'
                  className='w-auto h-auto text-white px-6 py-3 flex flex-row justify-center items-center rounded-full bg-green-400 md:bg-violet-900 md:hover:bg-green-400 hover:shadow-2xl transition-all z-30'
                >
                  <h5 className='w-fit h-fit text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg leading-none font-bold md:font-medium tracking-wider'>
                    Send
                  </h5>
                  <i className='text-base xl:text-lg leading-none font-bold md:font-medium tracking-wider ml-1'>
                    <IconArrowRight />
                  </i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}