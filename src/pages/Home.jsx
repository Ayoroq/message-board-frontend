import styles from "../styles.module.css";
import { useState, useEffect } from "react";
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
      <main>
        {data && data.map((message) => <p key={message.id}>{message.text}</p>)}
      </main>
    </div>
  );
}
