import Image from 'next/image';
import { IconArrowRight } from '@/icons/icons';
import phoneImageA from '@/public/images/iphone.png';
import phoneImageB from '@/public/images/android-v2.png'
import laptopImage from '@/public/images/laptop3.png'


export default function Header(props: any) {

  return (
    <div className='w-full h-full relative flex flex-col justify-end items-center bg-green-50'>
      {/***Content***/}
      <div className='container w-full h-full relative px-10 lg:px-36 flex flex-col justify-center items-start'>
        {/**Title text */}
        <div className='w-full h-fit flex flex-col justify-center z-[35]'>
          <h3 className='w-full h-fit text-gray-600 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide font-normal text-start flex'>
            The real app that
          </h3>
          <h1 className='w-2/3 h-fit text-gray-950 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl tracking-wide font-bold text-start drop-shadow-2xl flex z-30'>
            manages your money productively
          </h1>
        </div>
        {/**Subtitle text */}
        <div className='w-full h-fit flex flex-col justify-start z-[35]'>
          <h5 className='w-fit h-fit text-green-400 text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium tracking-wider text-start py-1 flex flex-col justify-start'>
            Improving your experience with money
          </h5>
        </div>
        {/**button to open join modal (register) */}
        <div className='w-full h-fit pt-10 flex flex-row justify-start items-center z-[35]'>
          <button
            className='w-fit h-fit px-8 py-3 text-green-50 hover:text-white md:hover:font-bold bg-violet-600 hover:bg-violet-900 flex flex-row justify-center items-center rounded-full cursor-pointer transform hover:scale-[1.1] transition-all z-30'
            onClick={props.joinModalOpen}
          >
            <h3 className='w-full h-2/3 text-sm lg:text-base xl:text-lg font-semibold tracking-wider flex flex-row justify-center items-center rounded-full transition-all'>
              Create your BAPI account
            </h3>
            <i className='text-base xl:text-lg leading-none font-bold md:font-medium tracking-wider ml-1'>
              <IconArrowRight />
            </i>
          </button>
        </div>

        {/**Image decorator */}
        <div className='w-auto h-[70%] absolute bottom-0 right-[2%] md:right-[22%] flex flex-row z-30'>
          <Image
            className='w-full h-full flex flex-row justify-end drop-shadow-md'
            alt='phone-example'
            src={phoneImageA}
            width={1000}
            height={800}
          />
        </div>
        <div className='w-auto h-[60%] absolute bottom-[25%] right-0 md:right-[20%] flex flex-row z-[25]'>
          <Image
            className='w-full h-full flex flex-row justify-end drop-shadow-md'
            alt='phone-example'
            src={phoneImageB}
            width={1000}
            height={800}
          />
        </div>
        <div className='w-auto h-1/2 absolute bottom-[23%] -right-[65%] md:-right-[25%] flex flex-row z-20'>
          <Image
            className='w-auto h-full flex flex-row justify-end drop-shadow-md'
            alt='laptop-example'
            src={laptopImage}
            width={1000}
            height={800}
          />
        </div>
      </div>
    </div>
  )
}