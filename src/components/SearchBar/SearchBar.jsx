import styles from "./SearchBar.module.css"
import searchIcon from "../../assets/images/icon-search.svg"

const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <div className={styles.inputWrapper}>
                <img src={searchIcon} alt="" className={styles.searchIcon} />
                <input
                    type="text"
                    placeholder="Search for a place..."
                    className={styles.searchInput}
                />
            </div>
            <button className={styles.searchButton}>Search</button>
        </div>

    )
}

export default SearchBar