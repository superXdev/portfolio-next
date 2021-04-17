import Layout from "../components/layout";
import { Fragment } from "react";

function Projects() {
  return (
    <Layout title="Projects">
      <ContainerProject>
        <Card
          projectName="OpenNews API (News Aggregator)"
          imageName="opennews"
          imageType="png"
          stack={["react", "json", "bootstrap", "laravel", "py"]}
          githubLink="https://opennewsapi.herokuapp.com/"
        />
        <Card
          projectName="Enam - Encrypted Password Manager"
          imageName="enam"
          imageType="png"
          stack={["laravel", "js", "css"]}
          githubLink="https://github.com/superXdev/enam"
        />
        <Card
          projectName="Pastelink"
          imageName="pastelink"
          imageType="png"
          stack={["js", "bootstrap", "laravel"]}
          githubLink="https://github.com/devnazir/yt-downloader"
        />
        <Card
          projectName="CNotepad - Cryptographic Notepad"
          imageName="cnotepad"
          imageType="png"
          stack={["cs"]}
          githubLink="https://github.com/superXdev/cnotepad"
        />
        <Card
          projectName="CraigList Scraper"
          imageName="craig"
          imageType="png"
          stack={["js", "css", "django"]}
          githubLink="https://github.com/superXdev/codelist"
        />
        <Card
          projectName="Game kertas batu gunting"
          imageName="game"
          imageType="png"
          stack={["cs"]}
          githubLink="https://github.com/superXdev/Game-batu-gunting-kertas"
        />
        <Card
          projectName="To-Do-App"
          imageName="todo-app"
          imageType="png"
          stack={["js", "bootstrap", "django"]}
          githubLink="https://github.com/superXdev/To-Do-App"
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
            Click project to see
          </span>
        </div>
        <button className="cursor-pointer">
          <a
            className=""
            href="https://github.com/superXdev"
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

      <div className="w-full h-full bg-green-400 p-2 text-white">
        <h2 className="text-xl cursor-pointer">{projectName}</h2>
        <div className="flex absolute right-0 top-0 bg-gray-600 p-2">
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
