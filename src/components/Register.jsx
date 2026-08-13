import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    college: "",
    teamSize: "1",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxZcGzQD2Vgru-M-HoOVjG22yyLbpj6c0iTVKdtEpD4Sh28_OlqoJuhzSwR0a9RqzIk/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setMessage("Registration successful! 🚀");

      setForm({
        name: "",
        email: "",
        college: "",
        teamSize: "1",
      });

    } catch (error) {
      console.error(error);
      setMessage(
        "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="register" className="section register">

      <div className="register-copy">
        <p className="eyebrow">
          SECURE YOUR SPOT
        </p>

        <h2>
          Ready to make
          <br />
          <em>some noise?</em>
        </h2>

        <p>
          Registration is free. Bring your idea,
          your skills, and your curiosity.
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>

        <label>
          College / Organization
          <input
            name="college"
            value={form.college}
            onChange={handleChange}
            placeholder="Where you build"
            required
          />
        </label>

        <label>
          Team size
          <select
            name="teamSize"
            value={form.teamSize}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>

        <button className="btn primary">
          Register for Hackbuzz →
        </button>

        <p className="form-message">
          {message}
        </p>

      </form>

    </section>
  );
}

export default Register;