import styles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router'

export default function NavbarFooter() {
    const router = useRouter()
    const go = page => {
        router.push(page)
    }
    return (
        <div className={styles.navbar}>
            <div>
                <a href={'/#'} onClick={go}>
                    <span className={styles.navbarFooterTitle}>Ferhan</span>
                </a>
            </div>
            <div className={styles.navbarTitleContainer}>
                <span className={styles.navbarFooterTitle}>Hakkımda</span>
                <span className={styles.navbarFooterTitle}>Çalışmalarımız</span>
                <a href={'/Journey'} onClick={go}>
                    <span className={styles.navbarFooterTitle}>Yolculuğa Başla</span>
                </a>
                <span className={styles.navbarFooterTitle}>Fotoğraflar</span>
            </div>
        </div>
    )
}
