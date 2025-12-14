import styles from "../styles.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function New() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    async function postData() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, text }),
      });
      const responseData = await response.json();
      if (response.ok) {
        setUsername("");
        setEmail("");
        setText("");
        navigate("/");
      } else {
        console.error("Error posting data:", responseData.error);
      }
    }
    postData().catch(console.error);
  }

  return (
    <main>
      <p className={styles.title}>New Notice</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={text}
            required
            cols={30}
            rows={10}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </p>
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </main>
  );
}
