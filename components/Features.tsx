import { useState, useEffect } from 'react';
import {
  IconTools,
  IconIdea,
  IconHeart,
} from '@/icons/icons';
import SectionTitles from './SectionTitles';



export default function Features(props: any) {

  const [animationActived, setAnimationActived] = useState(false);
  const featuresActived = props.featuresSectionActived;                                  /**To active animation on about section: true or false***/
  const animations = [                                                                   /***Animation order array: CSS animation to each element***/
    'md:animate-[appear-bottom_1.0s_ease]',
    'md:animate-[appear-bottom_1.5s_ease]',
    'md:animate-[appear-bottom_2.0s_ease]',
    'md:animate-[appear-bottom_3.0s_ease]'
  ];
  const features = [
    { id: 'icon-tool', icon: <IconTools />, title: 'Creating', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.' },
    { id: 'icon-idea', icon: <IconIdea />, title: 'Innovating', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.' },
    { id: 'icon-heart', icon: <IconHeart />, title: 'Passionate', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.' }
  ]
 
  useEffect(() => {                                                                      /***UseEffect to controller that animation occurs only once***/
    if (featuresActived === true) {
      setAnimationActived(true);
    }
  }, [featuresActived]);

  return (
    <div className='w-full h-full flex flex-col justify-center items-center z-30'>
      <div className='container w-full h-full px-10 lg:px-36 py-14 lg:py-36 flex flex-col justify-between items-center'>
        {/***Title section***/}
        <div className='w-full h-fit'>
          <SectionTitles
            title='We solve your requirement'
            titleWatermark='FEATURES'
          />
        </div>
        {/***Content section***/}
        <ul className='w-full h-full grid grid-cols-1 grid-rows-3 justify-items-center md:flex md:flex-row md:justify-between md:items-center list-none z-10'>
          {
            features.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    `${animationActived ?
                      animations[index]
                      : 'opacity-100 md:opacity-0'
                    } w-full md:w-[calc(0.333*95%)] h-fit py-5`
                  }>
                  <div className='w-full h-full relative p-6 flex flex-col justify-center items-center bg-white shadow-md border sm:border-2 border-violet-300 rounded-md sm:rounded-2xl'>
                    {/***icon gradient decorated***/}
                    <div className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 absolute -top-[1.80rem] sm:-top-[2.1rem] lg:-top-[2.65rem] xl:-top-[2.6rem] flex flex-col justify-center items-center bg-gray-200 rounded-full border sm:border-2 border-transparent border-b-violet-300 border-r-violet-300 transform rotate-45'>
                      <div className='w-[93%] h-[93%] flex flex-col justify-center items-center bg-violet-300 bg-opacity-75 rounded-full transform -rotate-45'>
                        <div className='w-[93%] h-[93%] flex flex-col justify-center items-center bg-violet-500 rounded-full'>
                          <div className='w-[93%] h-[93%] p-3 flex flex-col justify-center items-center bg-violet-900 rounded-full border-4 border-violet-700'>
                            <i
                              key={item.id}
                              className='w-fit h-fit text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl text-white text-center font-black'
                            >
                              {item.icon}
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/***title list***/}
                    <div className='w-full h-fit mt-2 sm:mt-3 lg:mt-6'>
                      <h2 className='w-full h-fit text-slate-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-center'>
                        {item.title}
                      </h2>
                    </div>
                    {/***spacer***/}
                    <div className='w-1/6 h-[2px] md:h-1 my-2 md:my-4 bg-green-400 rounded-2xl' />
                    {/**description list */}
                    <div className='w-full h-1/2 flex flex-col justify-center'>
                      <h4 className='w-full h-fit text-xs sm:text-sm lg:text-base 2xl:text-lg font-light text-center'>
                        {item.subtitle}
                      </h4>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        {/**Final note */}
        <div className={
          `${animationActived ?
            animations[3]
            : 'opacity-100 md:opacity-0'
          } w-full md:w-3/5 h-fit mt-5`
        }>
          <h4 className='w-full h-fit text-slate-700 text-xs sm:text-sm lg:text-base 2xl:text-lg text-center font-medium'>
            Our goal is to deliver every client, no matter the size, the opportunity to innovate and help build a better future.
          </h4>
        </div>
      </div>
    </div>
  )
}