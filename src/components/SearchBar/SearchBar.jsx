import { useState, useRef, useEffect } from "react";
import styles from "./SearchBar.module.css"
import searchIcon from "../../assets/images/icon-search.svg"
import Dropdown from "../../components/Dropdown/Dropdown";

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    // Prop data
    const searchSuggestions = ["Berlin", "London", "New York", "Tokyo"];

    const filteredSuggestions = searchSuggestions.filter(city =>
        city.toLowerCase().includes(inputValue.toLowerCase())
    );

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setIsOpen(e.target.value.length > 0);
    };

    const handleSelect = (value) => {
        setInputValue(value);
        setIsOpen(false);
    };

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
        <div className={styles.searchBar} ref={wrapperRef}>
            <div className={styles.inputWrapper}>
                <img src={searchIcon} alt="" className={styles.searchIcon} />
                <input
                    type="text"
                    placeholder="Search for a place..."
                    className={styles.searchInput}
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={() => inputValue && setIsOpen(true)}
                />
                {isOpen && (
                    <Dropdown items={filteredSuggestions} onSelect={handleSelect} />
                )}
            </div>
            <button className={styles.searchButton}>Search</button>
        </div>

    )
}

export default SearchBar