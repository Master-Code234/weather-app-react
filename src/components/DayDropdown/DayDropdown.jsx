import DropdownButton from "../DropdownButton/DropdownButton";
import styles from "./DayDropdown.module.css";

const DayDropdown = ({ selectedDay, setSelectedDay }) => {
    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    return (
        <div className={styles.dropdown}>
            {daysOfWeek.map((day) => (
                <DropdownButton
                    key={day}
                    label={day}
                    active={selectedDay === day}
                    onClick={() => setSelectedDay(day)}
                    hideCheckmark={true}
                />
            ))}
        </div>
    );
};

export default DayDropdown;