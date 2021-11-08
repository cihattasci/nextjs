import styles from '../styles/Component.module.css'
import { useRouter } from 'next/router'

export default function Button(props) {
    const router = useRouter();
    const go = () => {
        router.push(props.page)
    }
    return (
        <button className={styles.sendButton} onClick={go}>
            Gönder
        </button>
    )
}
