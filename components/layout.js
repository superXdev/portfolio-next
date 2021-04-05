import Head from 'next/head'
import Link from 'next/link'
import Hamburger from './hamburger'

function Layout({ children, title, homepage = false }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className='container mx-auto max-w-screen-xl'>
                <nav className='flex flex-row justify-end sm:justify-start  fixed inset-x-0 h-20 items-center sm:px-20 px-7 subpixel-antialiased font-medium text-sm '>
                    <ul className='sm:flex flex-row space-x-12 flex-wrap hidden '>
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

                    <Hamburger />
                </nav>

                {
                    homepage ? <div className='h-screen flex items-center xl:px-0 sm:px-20 px-7 cursor-default'>{children}</div> : <div className=''>{children}</div> 
                }

            </div>
        </>
    )
}

export default Layout