function Prizes() {
  const prizes = [
    ["01 / GRAND PRIZE", "₹50K", "Cash prize + mentorship"],
    ["02 / RUNNER UP", "₹25K", "Cash prize + goodies"],
    ["03 / BEST BEGINNER", "₹10K", "Cash prize + goodies"],
  ];

  return (
    <section id="prizes" className="section prizes">

      <p className="eyebrow">WHAT'S AT STAKE</p>

      <h2>
        Build something.
        <br />
        <em>Take the spotlight.</em>
      </h2>

      <div className="prize-grid">

        {prizes.map((prize, index) => (
          <div
            className={`prize ${
              index === 0 ? "featured" : ""
            }`}
            key={prize[0]}
          >

            <small>{prize[0]}</small>

            <strong>{prize[1]}</strong>

            <p>{prize[2]}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Prizes;