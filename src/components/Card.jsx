import styles from "../styles.module.css";

export default function Card({ message }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  return (
    <div className={styles.card} style={{ backgroundColor: message.color }}>
      <p className={styles.text}>{message.text}</p>
      <div className={styles.cardInfoContainer}>
        <div className={styles.cardInfo}>
          <p>@{message.username}</p>
          <p>{formatDate(message.added)}</p>
        </div>
      </div>
    </div>
  );
}
