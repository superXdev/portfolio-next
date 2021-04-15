import { useRef } from 'react'

function Hamburger({ h3RefHome }) {
  
  const refHamburger = useRef()

  const showListNav = () => {
    const listNav = refHamburger.current.previousElementSibling;
    const h3AtHome = h3RefHome?.current;

    listNav.classList.toggle('hidden')

    if (h3AtHome) {
      h3AtHome.classList.toggle('-z-1')
    }
  }

  return (
    <div className='sm:hidden flex flex-col w-7 h-5 cursor-pointer justify-between z-20 fixed' onClick={showListNav} ref={refHamburger}>
      <span className='h-0.5 bg-black'></span>
      <span className='h-0.5 bg-black'></span>
      <span className='h-0.5 bg-black'></span>
    </div>
  )
}

export default Hamburger