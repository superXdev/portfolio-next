import Layout from "../components/layout";
import { useRef } from "react";

function Home() {
  const h3Ref = useRef();

  return (
    <Layout homepage title="Fikri Rudiansyah" h3RefHome={h3Ref}>
      <div>
        <h1 className="sm:text-5xl text-3xl font-thin transition duration-700 animate-leftToRight flex items-center">
          Hello{" "}
          <span className="bg-wave-icon block w-8 h-8 bg-cover ml-3 hover:animate-shake"></span>
        </h1>
        <h2 className="text-lg sm:text-2xl font-light w-full leading-snug my-10 lg:w-6/12 md:text-4xl md:leading-normal animate-fadeIn">
          I'm <span className="font-normal">Fikri Rudiansyah</span>, a
          web developer focused on building useful websites and
          application
        </h2>
        <h3 className="font-base flex items-center relative" ref={h3Ref}>
          Get in touch{" "}
          <span className="bg-call-icon block w-8 h-8 bg-cover mx-3 hover:animate-shake animate-shake"></span>{" "}
          <a
            className="sm:static absolute -bottom-7 rounded bg-green-500 hover:bg-green-800 transition duration-400 text-white pl-3 pr-3"
            href="mailto:fikrizhanking@gmail.com"
          >
            fikrizhanking@gmail.com
          </a>
        </h3>
      </div>
    </Layout>
  );
}

export default Home;
