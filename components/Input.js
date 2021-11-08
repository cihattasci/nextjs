import styles from '../styles/Component.module.css'

export default function Input(props) {
    const handleChange = e => {
        props.onChange(e.target.value)
    }
    return (
        <input
            placeholder={props.placeholder}
            value={props.value}
            className={styles.input}
            onChange={handleChange}
        />
    )
}
