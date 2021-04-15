import List from './listNav'
import Hamburger from './hamburger'

function Nav({ h3RefHome, position }) {
    return (
        <nav className={`${position} bg-white flex flex-row justify-end sm:justify-start z-10 inset-x-0 h-20 xl:px-0 sm:px-20 px-7 items-center subpixel-antialiased font-medium text-sm `}>
            <List />
            <Hamburger h3RefHome={h3RefHome} />
        </nav>
    )
}

export default Nav