const Hero = () => {
  return (
    <section className="my-32 flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto flex items-center space-x-6">
        <div
          className="w-40 h-40 rounded-full bg-cover bg-center sm:bg-right-top shadow-md"
          style={{
            backgroundImage: "url('/src/assets/Portfolioheadshot.png')",
          }}
        ></div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-light text-gray-800 mb-6">
            Hello, my name is <span className="text-blue-500">Aaron</span>
          </h1>
          <h2 className="text-slate-600">
            I am an aspiring Software Engineer based in Crestview, FL.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
