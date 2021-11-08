import styles from '../styles/Component.module.css'

export default function TopHeader(props) {
    return (
        <div className={styles.headerTextContainer}>
            <span className={styles.headerText}>{props.text}</span>
        </div>
    )
}
