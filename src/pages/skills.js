import Layout from "../components/layout";

function Skills() {
  return (
    <Layout title="Skills">
      <SkillCards>
        <Card skill="CSS" experience="1 year" imageName="css" imageType="png" />
        <Card
          skill="JavaScript"
          experience="1 Year"
          imageName="js"
          imageType="png"
        />
        <Card
          skill="SASS"
          experience="6 Months"
          imageName="sass"
          imageType="png"
        />
        <Card
          skill="Node JS"
          experience="6 Months"
          imageName="nodejs"
          imageType="svg"
        />
        <Card
          skill="React Js"
          experience="2 Months"
          imageName="react"
          imageType="png"
        />
        <Card
          skill="Next Js"
          experience="1 Months"
          imageName="next"
          imageType="svg"
        />
        <Card
          skill="Tailwind"
          experience="1 Months"
          imageName="tailwind"
          imageType="svg"
        />
      </SkillCards>
      <Learning>
        <Card
          skill="TypeScript"
          imageName="ts"
          imageType="svg"
          learning={true}
        />
      </Learning>
    </Layout>
  );
}

function SkillCards({ children }) {
  return (
    <div className="mb-4">
      <h1 className="text-3xl">Skills</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {children}
      </div>
    </div>
  );
}

function Learning({ children }) {
  return (
    <div className="w-40">
      <h2 className="text-md">Currently Learning...</h2>
      {children}
    </div>
  );
}

function Card({ skill, experience, imageName, imageType, learning = false }) {
  return (
    <div className="bg-white shadow-md p-6 box-border flex flex-col items-center m-3 justify-center">
      <div className="mb-3">
        <img
          className="w-24"
          src={`/images/${imageName}.${imageType}`}
          alt={skill}
        />
      </div>
      <div className="flex flex-col items-center">
        <span className="block text-xl mb-2">{skill}</span>
        <span className="text-center">
          <span className="font-medium">{experience}</span>{" "}
          {learning ? "" : "of experience"}
        </span>
      </div>
    </div>
  );
}

export default Skills;
