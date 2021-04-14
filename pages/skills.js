import Layout from "components/layout";

function Skills() {
  return (
    <Layout title="Skills">
      <div className="mb-4">
        <h1 className="text-3xl">Skills</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div className="bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center">
            <div className="mb-3">
              <img className="w-24" src="/images/js.png" alt="JavaScript" />
            </div>
            <div className="flex flex-col items-center">
              <span className="block text-xl mb-2">JavaScript</span>
              <span className="text-center">
                <span className="font-medium">1 year</span> of experience
              </span>
            </div>
          </div>

          <div className="bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center">
            <div className="mb-3">
              <img className="w-24" src="/images/css.png" alt="CSS" />
            </div>
            <div className="flex flex-col items-center ">
              <span className="block text-xl mb-2">CSS</span>
              <span className="text-center">
                <span className="font-medium ">1 Years</span> of experience
              </span>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center">
            <div className="mb-3">
              <img className="w-24" src="/images/sass.png" alt="SASS" />
            </div>
            <div className="flex flex-col items-center">
              <span className="block text-xl mb-2">SASS</span>
              <span className="text-center">
                <span className="font-medium">6 Months</span> of experience
              </span>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center">
            <div className="mb-3">
              <img className="w-24" src="/images/nodejs.svg" alt="Node JS" />
            </div>
            <div className="flex flex-col items-center">
              <span className="block text-xl mb-2">Node JS</span>
              <span className="text-center">
                <span className="font-medium">6 Months</span> of experience
              </span>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center">
            <div className="mb-3">
              <img className="w-24" src="/images/react.png" alt="React JS" />
            </div>
            <div className="flex flex-col items-center">
              <span className="block text-xl mb-2">React JS</span>
              <span className="text-center">
                <span className="font-medium">2 Months</span> of experience
              </span>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center">
            <div className="mb-3">
              <img className="w-24" src="/images/next.svg" alt="Next JS" />
            </div>
            <div className="flex flex-col items-center">
              <span className="block text-xl mb-2">Next JS</span>
              <span className="text-center">
                <span className="font-medium">1 Month</span> of experience
              </span>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center">
            <div className="mb-3">
              <img
                className="w-24"
                src="/images/tailwind.svg"
                alt="Tailwind CSS"
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="block text-xl mb-2">Tailwind CSS</span>
              <span className="text-center">
                <span className="font-medium">1 Month</span> of experience
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-40">
        <h2 className="text-md">Currently Learning...</h2>
        <div className="bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center w-full">
          <div className="mb-3">
            <img className="w-24" src="/images/ts.svg" alt="TypeScript" />
          </div>
          <div className="flex flex-col items-center">
            <span className="block text-xl mb-2">TypeScript</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Skills;
