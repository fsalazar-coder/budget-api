
export default function NavbarTopSlider(props: any) {

  const navbarNarrowActive = props.navbarNarrowActive;
  const navbarFirstUse = props.navbarFirstUse;

  return (
    <ul className={
      `w-full h-fit fixed right-0 top-0 py-16 flex flex-col justify-start items-center bg-[rgb(10,15,70)] transition-all z-40
      ${navbarNarrowActive ?
        'animate-[appear-top_0.50s_ease]'
        : navbarFirstUse ?
          'transform translate-y-[-500%] animate-[disappear-top_2.0s_ease]'
          : 'hidden'
      }`
    }>
      <li className='container w-full h-fit flex flex-row justify-center items-start list-none'
      >
        <h2 className='w-full h-full text-white text-sm font-semibold tracking-wider py-2 flex flex-row justify-center items-center'>
          Login
        </h2>
      </li>
      <li className='container w-full h-fit flex flex-row justify-center items-start list-none'
      >
        <h2 className='w-full h-full text-white text-sm font-semibold tracking-wider py-2 flex flex-row justify-center items-center'>
          Join
        </h2>
      </li>
    </ul>
  )
}