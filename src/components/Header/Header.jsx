import logo from "../../assets/images/logo.svg"
import UnitsToggle from "../UnitsToggle/UnitsToggle"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" className={styles.logoImage} />
            </div>
            <UnitsToggle />
        </header>
    )
}

export default Header