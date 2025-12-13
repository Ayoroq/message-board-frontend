import styles from "../styles.module.css";
import { useState } from "react";
export default function New() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
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
