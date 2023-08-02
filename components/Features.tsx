import { useState, useEffect } from 'react';
import Image from 'next/image';



export default function Features(props: any) {

  const [animationActived, setAnimationActived] = useState(false);
  const featuresActived = props.featuresSectionActived;                                  /**To active animation on about section: true or false***/
  const animations = [                                                                   /***Animation order array: CSS animation to each element***/
    'md:animate-[appear-bottom_1.0s_ease]',
    'md:animate-[appear-bottom_1.5s_ease]',
    'md:animate-[appear-bottom_2.0s_ease]',
    'md:animate-[appear-bottom_3.0s_ease]'
  ];

  useEffect(() => {                                                                      /***UseEffect to controller that animation occurs only once***/
    if (featuresActived === true) {
      setAnimationActived(true);
    }
  }, [featuresActived]);

  return (
    <div className={
      `${props.darkBackground ?
        'bg-green-50'
        : 'bg-slate-50'} w-full h-full flex flex-col justify-center items-center z-30`
    }>
      <div className={
        `${props.textStart ?
          'md:flex-row'
          : 'md:flex-row-reverse'} container w-full h-screen px-10 lg:px-36 py-10 flex flex-col justify-center items-center`
      }>

        {/**text */}
        <div className='w-full md:w-3/5 h-3/4 relative flex flex-col justify-center items-center'>
          <h3 className='w-full h-fit text-green-400 text-xs sm:text-sm lg:text-base text-start font-bold z-10'>
            {props.subtitle}
          </h3>
          <h1 className='w-full h-fit mb-5 text-gray-950 text-base sm:text-lg lg:text-4xl text-start font-semibold z-10'>
            {props.title}
          </h1>
          <p className='w-full h-fit text-slate-700 text-xs sm:text-sm lg:text-base text-justify bg-transparent z-10'>
            {props.description}
          </p>
          <h1 className='w-fit h-3/4 absolute right-0 -top-1/3 text-[10rem] md:text-[15rem] lg:text-[20rem] text-transparent bg-gradient-to-b from-slate-300 via-slate-100 to-transparent bg-clip-text font-extrabold text-center flex flex-col justify-center z-0'>
            {props.number}
          </h1>
        </div>

        {/**image */}
        <div className='w-full md:w-2/5 h-3/4 flex flex-row justify-center items-center'>
          <Image
            className='w-2/3 h-auto flex flex-row justify-end drop-shadow-md'
            alt={props.alt}
            src={props.image}
            width={1000}
            height={800}
          />
        </div>
      </div>
    </div>
  )
}