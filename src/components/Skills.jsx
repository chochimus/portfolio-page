import SkillIcons from "./SkillIcons";

const Skills = () => {
  return (
    <section className="py-16 px-8 bg-stone-300 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">
        My current skillset includes
      </h2>
      <SkillIcons />
    </section>
  );
};

export default Skills;
