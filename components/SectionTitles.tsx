
export default function SectionTitles(props: any) {

  return (
    <div className='w-full h-auto relative flex flex-col justify-center items-start mb-3 sm:mb-6 md:mb-7 lg:mb-8'>
      {/**bigger title background: watermark */}
      <h1 className='w-full h-fit absolute bottom-1 sm:bottom-3 md:bottom-4 lg:bottom-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-transparent bg-gray-100 bg-clip-text font-extrabold text-start z-0'>
        {props.titleWatermark}
      </h1>
      {/**section title */}
      <h2 className='w-full h-fit text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-900 font-bold ${props.} text-center tracking-widest drop-shadow-4xl z-10'>
        {props.title}
      </h2>
    </div>
  )
}