import Head from 'next/head'
import CircleAnimation from './circleAnimation';
import Footer from './footer'
import Nav from './nav'
import { useRef, Fragment, useState } from 'react'

function Layout({ children, title, homepage = false, h3RefHome }) {
    const containerRef = useRef()
    const [positionNav, setPositionNav] = useState('absolute')

    if (containerRef.current) {
        document.body.onscroll = () => {
            const widthScreen = window.innerWidth;
            widthScreen < 640 ? setPositionNav('fixed') : setPositionNav('absolute')
        }
    }

    return (
        <Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <CircleAnimation containerRef={containerRef} />
            <main className={`container mx-auto max-w-screen-xl relative overflow-hidden ${homepage ? 'pb-0' : 'pb-32'}`} ref={containerRef}>
                <Nav h3RefHome={h3RefHome} position={positionNav} />

                <div className={`${homepage ? 'h-screen flex items-center' : 'pt-28'} xl:px-0 sm:px-20 px-7 cursor-default`}>
                    {children}
                </div>

                <Footer />
            </main>
        </Fragment>
    )
}

export default Layout
