import style from "../styles.module.css";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className={style.nav}>
      <div className={style.logo} onClick={() => navigate("/")}>
        NoticeBoard
      </div>
      <div className={style.links} onClick = {() => navigate("/new")}>
        <p className={style.newMessage}>Create new message</p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style.newMessageIcon}
        >
          <g id="Material Symbols Icon 1">
            <path
              id="Vector"
              d="M22.5 36.3H25.5V29.85H32V26.85H25.5V20.35H22.5V26.85H16V29.85H22.5V36.3ZM11 44C10.2 44 9.5 43.7 8.9 43.1C8.3 42.5 8 41.8 8 41V7C8 6.2 8.3 5.5 8.9 4.9C9.5 4.3 10.2 4 11 4H29.05L40 14.95V41C40 41.8 39.7 42.5 39.1 43.1C38.5 43.7 37.8 44 37 44H11ZM27.55 16.3V7H11V41H37V16.3H27.55Z"
              fill="#426B1F"
            />
          </g>
        </svg>
      </div>
    </nav>
  );
}
