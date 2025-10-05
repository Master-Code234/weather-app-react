import styles from "./DropdownButton.module.css";
import checkmarkIcon from "../../assets/images/icon-checkmark.svg";

const DropdownButton = ({ label, active, onClick, hideCheckmark = false, className = "" }) => {
    return (
        <button className={`${styles.button} ${className}`} onClick={onClick}>
            <span>{label}</span>
            {active && !hideCheckmark && (
                <img src={checkmarkIcon} alt="selected" className={styles.icon} />
            )}
        </button>
    );
};

export default DropdownButton;