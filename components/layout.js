import Head from 'next/head'
import Hamburger from './hamburger'
import ListNav from './ListNav'

function Layout({ children, title, homepage = false }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className='container mx-auto max-w-screen-xl'>
                <nav className='flex flex-row justify-end sm:justify-start  fixed inset-x-0 h-20 items-center sm:px-20 px-7 subpixel-antialiased font-medium text-sm '>
                    <ListNav/>
                    <Hamburger />
                </nav>

                {
                    homepage ? <div className='h-screen flex items-center xl:px-0 sm:px-20 px-7 cursor-default'>{children}</div> : <div className='pt-32 pl-0.5 cursor-default'>{children}</div> 
                }

            </div>
        </>
    )
}

export default Layout