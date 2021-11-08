import styles from '../styles/Component.module.css'
import NavbarFooter from './NavbarFooter'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <NavbarFooter/>
            <div className={styles.navbarFooterBottom}>
                <div className={styles.iconContainer}>
                    <i color={"#696969"} className="bi bi-facebook"></i>
                    <i color={"#696969"} className="bi bi-twitter"></i>
                    <i color={"#696969"} className="bi bi-instagram"></i>
                    <i color={"#696969"} className="bi bi-youtube"></i>
                </div>
                <span className={styles.mailText}>copyright © ferhancihaner.com</span>
            </div>
        </footer>
    )
}
