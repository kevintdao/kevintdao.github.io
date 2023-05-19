const About = () => {
  return (
    <section
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-indigo-600">
            About
          </p>
          <h2>Education</h2>
          <h2>Experiences</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
