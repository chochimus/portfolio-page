import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-stone-200">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default HomePage;
