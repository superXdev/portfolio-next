import Link from 'next/link'

function ListNav() {
    return (
        <ul className='sm:flex sm:flex-row sm:justify-start sm:m-0 sm:h-auto sm:bg-white sm:static sm:space-x-12 sm:space-y-0 sm:text-sm text-base hidden space-y-6 flex bg-white flex-col items-center justify-center fixed  inset-x-0 inset-y-0 animate-fadeInFaster'>
            <li>
                <Link href="/">
                    <a className='text-gray-600 hover:text-gray-900'>Homepage</a>
                </Link>
            </li>
            <li>
                <Link href="/projects">
                    <a className='text-gray-600 hover:text-gray-900'>Projects</a>
                </Link>
            </li>
            <li>
                <Link href="/skills">
                    <a className='text-gray-600 hover:text-gray-900'>Skills</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a className='text-gray-600 hover:text-gray-900'>About</a>
                </Link>
            </li>
        </ul>
    )
}

export default ListNav