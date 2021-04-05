import { useRef } from 'react'

function Hamburger() {
  const refHamburger = useRef()

  const showListNav = () => {
    const listNav = refHamburger.current.previousElementSibling;
    listNav.classList.toggle('hidden')
  }

  return (
    <div className='sm:hidden flex flex-col w-7 h-5 cursor-pointer justify-between z-10' onClick={showListNav} ref={refHamburger}>
      <span className='h-0.5 bg-black'></span>
      <span className='h-0.5 bg-black'></span>
      <span className='h-0.5 bg-black'></span>
    </div>
  )
}

export default Hamburger