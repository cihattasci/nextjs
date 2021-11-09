import styles from '../styles/Component.module.css'

export default function Input(props) {
    return (
        <input
            {...props}
            className={styles.input}
        />
    )
}
