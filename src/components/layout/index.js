/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/default */
/* eslint-disable react/prop-types */
/* eslint-disable import/namespace */

import Head from "next/head";
import CircleAnimation from "../../utils/circle_animation";
import Footer from "../footer";
import Nav from "../nav";
import { useRef, Fragment, useState, useEffect } from "react";
import { Body, Container } from "../content";

function Layout({ children, title, homepage = false, h3RefHome }) {
  const containerRef = useRef();
  const [positionNav, setPositionNav] = useState("absolute");

  useEffect(() => {
    if (containerRef.current) {
      document.body.onscroll = () => {
        const widthScreen = window.innerWidth;
        widthScreen < 640
          ? setPositionNav("fixed")
          : setPositionNav("absolute");
      };
    }
  });

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <CircleAnimation containerRef={containerRef} />
      <Container homepage={homepage} containerRef={containerRef}>
        <Nav h3RefHome={h3RefHome} position={positionNav} />
        <Body homepage={homepage}>{children}</Body>
        <Footer githubLink="https://github.com/superXdev">
          Fikri Rudiansyah
        </Footer>
      </Container>
    </Fragment>
  );
}

export default Layout;
