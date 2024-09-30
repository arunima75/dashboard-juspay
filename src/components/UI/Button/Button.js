import styles from "./Button.module.scss";

function Button({ children, fn, disabled, className  }) {
    const customClass = `${styles.buttonMain } w-100 ${className}`
    return (
        <button disabled={disabled} className={customClass} onClick={fn}>{ children }</button>
    )
}

export default Button;