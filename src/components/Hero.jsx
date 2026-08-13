import { useEffect, useState } from "react";

function Hero() {
  const target = new Date("2026-10-10T10:00:00+05:30").getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = Math.max(target - Date.now(), 0);

      setTime({
        days: Math.floor(difference / 86400000),
        hours: Math.floor(
          (difference % 86400000) / 3600000
        ),
        minutes: Math.floor(
          (difference % 3600000) / 60000
        ),
        seconds: Math.floor(
          (difference % 60000) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">

      <div className="hero-copy">

        <p className="eyebrow">
          ⚡ 24 HOURS · BUILD THE FUTURE
        </p>

        <h1>
          Hack.<br />
          <em>Create.</em><br />
          Buzz.
        </h1>

        <p className="hero-text">
          A high-energy hackathon where bold ideas
          turn into real products.
        </p>

        <div className="hero-actions">
          <a className="btn primary" href="#register">
            Register Now →
          </a>

          <a className="btn ghost" href="#schedule">
            Explore Event
          </a>
        </div>

      </div>

      <div className="countdown-card">

        <div className="card-top">
          <span>EVENT STARTS IN</span>
          <b>LIVE</b>
        </div>

        <div className="countdown">

          <div>
            <strong>{String(time.days).padStart(2, "0")}</strong>
            <small>DAYS</small>
          </div>

          <i>:</i>

          <div>
            <strong>{String(time.hours).padStart(2, "0")}</strong>
            <small>HOURS</small>
          </div>

          <i>:</i>

          <div>
            <strong>
              {String(time.minutes).padStart(2, "0")}
            </strong>
            <small>MIN</small>
          </div>

          <i>:</i>

          <div>
            <strong>
              {String(time.seconds).padStart(2, "0")}
            </strong>
            <small>SEC</small>
          </div>

        </div>

        <p>October 10, 2026 · 10:00 AM IST</p>

      </div>

    </section>
  );
}

export default Hero;