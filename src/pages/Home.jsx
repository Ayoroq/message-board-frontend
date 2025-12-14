import styles from "../styles.module.css";
import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(import.meta.env.VITE_API_URL);
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
        {!data && <div className={styles.loading}>Loading...</div>}
        {data?.length === 0 && <div className={styles.noMessages}>No messages yet</div>}
        <ul className={styles.cards}>
          {data?.map((message) => (
            <li key={message.id}>
              <Card message={message} setData={setData} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
