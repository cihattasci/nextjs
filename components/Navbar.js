import styles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter()
    const go = page => {
        router.push(page)
    }
    return (
        <div className={styles.navbar}>
            <div>
                <a href={'/#'} onClick={go}>
                    <span className={styles.navbarTitle}>Ferhan</span>
                </a>
            </div>
            <div className={styles.navbarTitleContainer}>
                <span className={styles.navbarTitle}>Hakkımda</span>
                <span className={styles.navbarTitle}>Çalışmalarımız</span>
                <a href={'/Journey'} onClick={go}>
                    <span className={styles.navbarTitle}>Yolculuğa Başla</span>
                </a>
                <a href={'/Photos'} onClick={go}>
                    <span className={styles.navbarTitle}>Fotoğraflar</span>
                </a>
            </div>
        </div>
    )
}
