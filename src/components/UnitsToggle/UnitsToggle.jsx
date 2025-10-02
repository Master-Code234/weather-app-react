import unitsIcon from "../../assets/images/icon-units.svg"
import dropDownIcon from "../../assets/images/icon-dropdown.svg"
import styles from "./UnitsToggle.module.css"

const UnitsToggle = () => {
    return (
        <div className={styles.unitsToggle}>
            <img src={unitsIcon} alt="Units" className={styles.unitIcon} />
            <span className={styles.label}>units</span>
            <img src={dropDownIcon} alt="" className={styles.dropdownIcon} />
        </div>
    )
}

export default UnitsToggle