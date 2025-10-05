import { useState, useRef, useEffect } from "react";
import unitsIcon from "../../assets/images/icon-units.svg";
import dropDownIcon from "../../assets/images/icon-dropdown.svg";
import styles from "./UnitsToggle.module.css";
import UnitsDropdown from "../UnitsDropdown/UnitsDropdown";

const UnitsToggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={styles.unitsWrapper} ref={wrapperRef}>
            <div className={styles.unitsToggle}>
                <img src={unitsIcon} alt="Units" className={styles.unitIcon} />

                <span className={styles.label}>Units</span>
                <img
                    src={dropDownIcon}
                    alt="Toggle dropdown"
                    className={`${styles.dropdownIcon} ${isOpen ? styles.open : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen((prev) => !prev);
                    }}
                />
            </div>

            {isOpen && <UnitsDropdown />}
        </div>
    );
};

export default UnitsToggle;