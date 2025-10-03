import { useRef } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({ items = [], onSelect, className = "" }) => {
    const dropdownRef = useRef(null);

    if (!items || items.length === 0) return null;

    return (
        <ul ref={dropdownRef} className={`${styles.dropdown} ${className}`}>
            {items.map((item, idx) => (
                <li
                    key={idx}
                    className={styles.dropdownItem}
                    onClick={() => onSelect(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;