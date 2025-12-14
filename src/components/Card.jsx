import styles from "../styles.module.css";

export default function Card({ message, setData }) {
  function handleDelete() {
    async function deleteMessage() {
      const response = await fetch(`http://localhost:4000/${message.id}`, {
        method: "DELETE",
      });
      const responseData = await response.json();
      if (response.ok) {
        setData(responseData.data);
      } else {
        console.error("Error deleting message:", responseData.error);
      }
    }
    deleteMessage().catch(console.error);
  }
  return (
    <div className={styles.card}>
      <p className={styles.text}>{message.text}</p>
      <div className={styles.cardInfoContainer}>
        <div className={styles.cardInfo}>
          <p>@{message.user}</p>
          <p>{message.added}</p>
        </div>
        <div className={styles.deleteContainer}>
          <button className={styles.deleteButton}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.deleteIcon}
              onClick={handleDelete}
            >
              <g id="Material Symbols Icon (1) 1">
                <path
                  id="Vector"
                  d="M13.05 42C12.225 42 11.5188 41.7062 10.9315 41.1185C10.3438 40.5312 10.05 39.825 10.05 39V10.5H8V7.5H17.4V6H30.6V7.5H40V10.5H37.95V39C37.95 39.8 37.65 40.5 37.05 41.1C36.45 41.7 35.75 42 34.95 42H13.05ZM34.95 10.5H13.05V39H34.95V10.5ZM18.35 34.7H21.35V14.75H18.35V34.7ZM26.65 34.7H29.65V14.75H26.65V34.7Z"
                  fill="#EA3323"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
