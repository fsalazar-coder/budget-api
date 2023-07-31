import { useState } from 'react';
import Image from 'next/image';
import phoneImageA from '@/public/images/iphone.png';
import phoneImageB from '@/public/images/android-v2.png'
import laptopImage from '@/public/images/laptop3.png'


export default function Header(props: any) {

  const [contactModal, setContactModal] = useState(false);                               /***State blog modal open: true or false***/
  const [contactModalAnimationClose, setContactModalAnimationClose] = useState(false);

  return (
    <div className='w-full h-full relative flex flex-col justify-end items-center bg-green-50'>
      {/***Content***/}
      <div className='container w-full h-full relative px-10 lg:px-36 flex flex-col justify-center items-start'>
        {/**Title text */}
        <div className='w-full h-fit flex flex-col justify-center'>
          <h3 className='w-full h-fit text-gray-600 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide font-normal text-start flex'>
            The real app that
          </h3>
          <h1 className='w-2/3 h-fit text-gray-950 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl tracking-wide font-bold text-start drop-shadow-2xl flex z-30'>
            manages your money productively
          </h1>
        </div>
        {/**Subtitle text */}
        <div className='w-full h-fit flex flex-col justify-start'>
          <h5 className='w-fit h-fit text-blue-400 md:text-green-400 text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium tracking-wider text-start py-1 flex flex-col justify-start'>
            Improving your experience with money
          </h5>
        </div>
        {/**Image decorator */}
        <div className='w-auto h-[90%] absolute -bottom-[15%] right-[22%] flex flex-row z-30'>
          <Image
            className='w-full h-full flex flex-row justify-end drop-shadow-md'
            alt='phone-example'
            src={phoneImageA}
            width={1000}
            height={800}
          />
        </div>
        <div className='w-auto h-[80%] absolute bottom-[5%] right-[18%] flex flex-row z-[25]'>
          <Image
            className='w-full h-full flex flex-row justify-end drop-shadow-md'
            alt='phone-example'
            src={phoneImageB}
            width={1000}
            height={800}
          />
        </div>
        <div className='w-auto h-1/2 absolute bottom-0 -right-[10%] flex flex-row z-20'>
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