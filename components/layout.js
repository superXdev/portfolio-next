import Head from 'next/head'
import Hamburger from './hamburger'
import List from './listNav'
import { useRef } from 'react'

function Layout({ children, title, homepage = false, h3RefHome }) {
    const circleRef = useRef()
    const years = new Date().getFullYear()
    let onTouch = false;

    const animationMouse = (e) => {
        const [mouseX, mouseY] = [e.clientX, e.clientY];
        const [widthCircle, heightCircle] = [circleRef.current.offsetWidth / 2, circleRef.current.offsetHeight / 2]

        circleRef.current.style.cssText = `left: ${mouseX - widthCircle}px; top: ${mouseY - heightCircle}px`
    }

    const animationClickCircle = () => {
        if (onTouch) return;

        circleRef.current.classList.add('w-16', 'h-16')
        setTimeout(() => {
            circleRef.current?.classList.remove('w-16', 'h-16')
        }, 400)
    }

    const startTouchAnimation = () => {
        onTouch = true;
        circleRef.current?.classList.remove('hidden', 'transition-all', 'duration-500', 'ease-out')

        setTimeout(() => {
            circleRef.current?.classList.remove('opacity-0')
            circleRef.current?.classList.add('animate-ping')
            setTimeout(() => {
                circleRef.current?.classList.remove('animate-ping')
                circleRef.current?.classList.add('hidden', 'opacity-0')
            }, 500)
        }, 100)

    }

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div ref={circleRef} className='hidden md:block w-8 h-8 rounded-full border-2 border-yellow-400 fixed -left-10 transition-all duration-500 ease-out'></div>
            <div className='container mx-auto max-w-screen-xl relative' onMouseMove={animationMouse} onClick={animationClickCircle} onTouchStart={startTouchAnimation}>
                <nav className='flex flex-row justify-end sm:justify-start absolute inset-x-0 h-20 xl:px-0 sm:px-20 px-7 items-center subpixel-antialiased font-medium text-sm '>
                    <List/>
                    <Hamburger h3RefHome={h3RefHome} />
                </nav>

                {
                    homepage ? <div className='h-screen flex items-center xl:px-0 sm:px-20 px-7 cursor-default'>{children}</div> : <div className='pt-28 xl:px-0 sm:px-20 px-7 cursor-default'>{children}</div>
                }

                {/* <footer className='font-light absolute bottom-0 left-0 right-0 flex flex-col sm:items-end xl:px-0 sm:px-20 px-7 pb-3 cursor-default sm:text-base items-center text-xs'>
                    <div className='flex items-center'>Built with Next Js and Tailwind <span className='ml-3 block bg-love-img w-4 h-4 bg-cover'></span> </div>
                    <div> <a href="https://github.com/devnazir" target='blank'>Nazir Bahrul Ulum</a> &copy; {years}</div>
                </footer> */}
            </div>
        </>
    )
}

export default Layout
