import Layout from "../components/layout";

function Skills() {
  return (
    <Layout title="Skills">
      <SkillCards>
        <Card skill="CSS" experience="1 years" imageName="css" imageType="png" />
        <Card
          skill="JavaScript"
          experience="6 Months"
          imageName="js"
          imageType="png"
        />
        <Card
          skill="C#"
          experience="3 years"
          imageName="cs"
          imageType="png"
        />
        <Card
          skill="Laravel"
          experience="8 Months"
          imageName="laravel"
          imageType="png"
        />
        <Card
          skill="Python"
          experience="4 Months"
          imageName="py"
          imageType="png"
        />
        <Card
          skill="Bootstrap"
          experience="1 years"
          imageName="bootstrap"
          imageType="png"
        />
        <Card
          skill="Jquery"
          experience="1 years"
          imageName="jq"
          imageType="png"
        />
        <Card
          skill="PHP"
          experience="1 years"
          imageName="php"
          imageType="svg"
        />
      </SkillCards>
      <Learning>
        <Card
          skill="Vuejs"
          imageName="vue"
          imageType="png"
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
