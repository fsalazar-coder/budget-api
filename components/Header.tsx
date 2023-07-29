import { useState } from 'react';
import Image from 'next/image';
import phoneImage from '@/public/images/smartphone_02.png';


export default function Header(props: any) {

  const [contactModal, setContactModal] = useState(false);                               /***State blog modal open: true or false***/
  const [contactModalAnimationClose, setContactModalAnimationClose] = useState(false);

  return (
    <div className='w-full h-full relative flex flex-col justify-end items-center bg-slate-100'>
      {/***Content***/}
      <div className='container w-full h-full relative px-10 lg:px-36 flex flex-col justify-center items-start'>
        {/**Title text */}
        <div className='w-full h-fit flex flex-col justify-center'>
          <h2 className='w-full h-fit text-gray-600 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide font-normal text-start flex'>
            The real app that
          </h2>
          <h2 className='w-2/3 h-fit text-gray-950 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl tracking-wide font-bold text-start drop-shadow-2xl flex z-30'>
            manages your money productively
          </h2>
        </div>
        {/**Subtitle text */}
        <div className='w-full h-fit flex flex-col justify-start'>
          <h4 className='w-fit h-fit text-blue-400 md:text-green-400 text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium tracking-wider text-start py-1 flex flex-col justify-start'>
            Improving your experience with money
          </h4>
        </div>
        {/**Image decorator */}
        <div className='w-6/5 h-auto absolute bottom-0 -right-10 z-20'>
          <Image
            className='w-full h-auto flex flex-row justify-end drop-shadow-xl'
            alt='phone-example'
            src={phoneImage}
            width={1000}
            height={800}
          />
        </div>
      </div>
    </div>
  )
}