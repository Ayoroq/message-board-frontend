import styles from "../styles.module.css";
import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4000/");
      const responseData = await response.json();
      if (response.ok) {
        setData(responseData);
      } else {
        console.error("Error fetching data:", responseData.error);
      }
    }
    fetchData().catch(console.error);
  }, []);

  return (
    <div className={styles.home}>
      <main className={styles.main}>
        <ul className={styles.cards}>
          {!data && <p>Loading...</p>}
          {data?.length === 0 && <p>No messages yet</p>}
          {data?.map((message) => (
            <li key={message.id}>
              <Card {...message} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
