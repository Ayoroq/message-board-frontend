import styles from '../styles.module.css'
export default function Card(message){
    return(
        <div className={styles.card}>
            <p className={styles.text}>{message.text}</p>
            <div className={styles.cardInfo}>
                <p>{message.user}</p>
                <p>{message.added}</p>
            </div>
        </div>
    )
}