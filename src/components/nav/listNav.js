import ActiveLink from './activeLink'

function listNav() {
    return (
        <ul className='sm:flex sm:flex-row sm:justify-start sm:m-0 sm:h-auto w-full sm:bg-white sm:static sm:space-x-12 sm:space-y-0 sm:text-sm text-base hidden space-y-6 flex bg-white flex-col items-center justify-center fixed  inset-x-0 inset-y-0 animate-fadeInFaster z-10'>
            <li>
                <ActiveLink href='/'>
                    Home
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href='/projects'>
                    Projects
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href='/skills'>
                    Skills
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href='/about'>
                    About
                </ActiveLink>
            </li>
            <li className='sm:absolute xl:right-0 bg-green-500 p-2 rounded right-20 hover:bg-green-800'>
                <ActiveLink cv href='cv/Resume-Fikri-Rudiansyah.pdf' target='blank'>
                    Download CV
                </ActiveLink>
            </li>
        </ul>
    )
}

export default listNav