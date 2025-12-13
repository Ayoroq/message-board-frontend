import styles from "../styles.module.css";
export default function New() {
  return (
    <main>
      <p className={styles.title}>New Notice</p>
      <form action="" className={styles.form}>
        <p>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required />
        </p>
        <p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            required
                cols={30}
                rows={10}
          ></textarea>
        </p>
        <button type="submit" className={styles.submit}>Submit</button>
      </form>
    </main>
  );
}