import style from '../styles.module.css'
import { useNavigate } from 'react-router'

export default function Navbar(){
    const navigate = useNavigate()
    return(
        <nav className={style.nav}>
            <div className={style.logo} onClick={() => navigate('/')}>MessageBoard</div>
            <div className={style.links}>
                <a href="/new" className={style.new}>Create New Message</a>
            </div>
        </nav>
    )
}