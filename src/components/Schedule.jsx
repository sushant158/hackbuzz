function Schedule() {
  const events = [
    {
      time: "10:00 AM",
      title: "Opening & Kickoff",
      description:
        "Welcome, rules, team formation, and challenge reveal.",
    },
    {
      time: "11:00 AM",
      title: "Hacking Begins",
      description:
        "Build, test, iterate. Mentors are available throughout.",
    },
    {
      time: "07:00 PM",
      title: "Mentor Checkpoint",
      description:
        "Get feedback and sharpen your product before the final push.",
    },
    {
      time: "10:00 AM",
      title: "Final Pitches",
      description:
        "Demo your creation to the judges and the crowd.",
    },
  ];

  return (
    <section id="schedule" className="section schedule">

      <p className="eyebrow">THE TIMELINE</p>

      <h2>
        24 hours. <em>One mission.</em>
      </h2>

      <div className="timeline">

        {events.map((event, index) => (
          <div className="time-item" key={index}>

            <time>{event.time}</time>

            <div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Schedule;