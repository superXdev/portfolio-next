import Layout from "../components/layout";
import { Fragment } from "react";

function Projects() {
  return (
    <Layout title="Projects">
      <ContainerProject>
        <Card
          projectName="Youtube Downloader"
          imageName="yt-downloader"
          imageType="png"
          stack={["js", "sass", "nodejs"]}
          githubLink="https://github.com/devnazir/yt-downloader"
        />
        <Card
          projectName="Movie Trailer"
          imageName="mov-trailer"
          imageType="png"
          stack={["js", "sass", "webpack"]}
          githubLink="https://github.com/devnazir/movietrailer"
        />
        <Card
          projectName="Nmovie"
          imageName="nmov"
          imageType="png"
          stack={["js", "sass", "webpack"]}
          githubLink="https://github.com/devnazir/nmov"
        />
        <Card
          projectName="API LK21"
          imageName="api-lk21"
          imageType="png"
          stack={["js", "json", "nodejs"]}
          githubLink="https://github.com/devnazir/api-lk21"
        />
        <Card
          projectName="API FILMAPIK"
          imageName="api-filmapik"
          imageType="png"
          stack={["js", "json", "nodejs"]}
          githubLink="https://github.com/devnazir/api-filmapik"
        />
        <Card
          projectName="Kelas io"
          imageName="kelas-io"
          imageType="png"
          stack={["css", "js"]}
          githubLink="https://github.com/devnazir/kelas-io"
        />
        <Card
          projectName="Sage"
          imageName="sage"
          imageType="png"
          stack={["sass", "js"]}
          githubLink="https://github.com/devnazir/sage"
        />
        <Card
          projectName="Mainan"
          imageName="mainan"
          imageType="png"
          stack={["sass", "js"]}
          githubLink="https://github.com/devnazir/mainan"
        />
      </ContainerProject>
    </Layout>
  );
}

function ContainerProject({ children }) {
  return (
    <Fragment>
      <div className="flex justify-between items-end mb-4">
        <div>
          <h1 className="text-3xl">Projects</h1>
          <span className="block text-sm">
            Click project to see source code in github
          </span>
        </div>
        <button className="cursor-pointer">
          <a
            className=""
            href="https://github.com/devnazir?tab=repositories"
            target="blank"
          >
            More projects...
          </a>
        </button>
      </div>
      <div className="grid md:grid-cols-project gap-6 gap-y-10">{children}</div>
    </Fragment>
  );
}

function Card({ projectName, imageName, imageType, stack, githubLink }) {
  const toRepo = (card) => {
    if (card) {
      card.nativeEvent.path.some((card) => {
        if (card.classList?.contains("card-project")) {
          const href = card.dataset.href;
          window.open(href, "_blank");
        }
      });
    }
  };

  return (
    <div
      className="card-project rounded overflow-hidden relative bg-black"
      onClick={toRepo}
      data-href={githubLink}
    >
      <div className="w-full">
        <img
          src={`/images/${imageName}.${imageType}`}
          alt={projectName}
        />
      </div>

      <div className="w-full h-full bg-purple-400 p-2 text-white">
        <h2 className="text-xl cursor-pointer">{projectName}</h2>
        <div className="flex absolute right-0 top-0 bg-green-500 rounded p-2">
          {stack.map((stack, id) => {
            return (
              <img
                key={id}
                src={`/icons/${stack}.png`}
                className="w-5 h-5 bg-cover mr-1"
                alt={stack}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
