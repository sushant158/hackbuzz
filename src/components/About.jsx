function About() {
  const features = [
    {
      number: "01",
      title: "Build Fast",
      text: "24 focused hours to turn your wildest idea into a working prototype.",
    },
    {
      number: "02",
      title: "Meet Builders",
      text: "Find developers, designers, founders, and problem-solvers who think like you.",
    },
    {
      number: "03",
      title: "Win Big",
      text: "Compete for prizes, mentorship, recognition, and opportunities.",
    },
  ];

  return (
    <section id="about" className="section about">

      <div>
        <p className="eyebrow">WHY HACKBUZZ?</p>

        <h2>
          Ideas are cheap.
          <br />
          <em>Execution is everything.</em>
        </h2>
      </div>

      <div className="feature-grid">

        {features.map((feature) => (
          <article key={feature.number}>

            <span>{feature.number}</span>

            <h3>{feature.title}</h3>

            <p>{feature.text}</p>

          </article>
        ))}

      </div>

    </section>
  );
}

export default About;