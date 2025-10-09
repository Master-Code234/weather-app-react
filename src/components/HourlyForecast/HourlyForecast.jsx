import { useState, useRef, useEffect } from "react";
import styles from "./HourlyForecast.module.css";
import HourlyForecastCard from "../HourlyForecastCard/HourlyForecastCard";
import DayDropdown from "../DayDropdown/DayDropdown";
import overcastIcon from "../../assets/images/icon-overcast.webp";
import partlyCloudyIcon from "../../assets/images/icon-partly-cloudy.webp";
import sunnyIcon from "../../assets/images/icon-sunny.webp";
import snowIcon from "../../assets/images/icon-snow.webp";
import fogIcon from "../../assets/images/icon-fog.webp";
import dropDownIcon from "../../assets/images/icon-dropdown.svg";

const HourlyForecast = () => {
    const [selectedDay, setSelectedDay] = useState("Tuesday");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const hours = [
        { time: "3 PM", temp: 20, icon: overcastIcon },
        { time: "4 PM", temp: 30, icon: partlyCloudyIcon },
        { time: "5 PM", temp: 28, icon: sunnyIcon },
        { time: "6 PM", temp: 24, icon: overcastIcon },
        { time: "7 PM", temp: 18, icon: snowIcon },
        { time: "8 PM", temp: 18, icon: fogIcon },
        { time: "9 PM", temp: 17, icon: snowIcon },
        { time: "10 PM", temp: 17, icon: overcastIcon },
    ];

    return (
        <div className={styles.hourlyForecast} ref={wrapperRef}>
            <div className={styles.header}>
                <h2 className={styles.title}>Hourly forecast</h2>
                <div className={styles.selector}>
                    <span>{selectedDay}</span>
                    <img
                        src={dropDownIcon}
                        alt="Toggle dropdown"
                        className={`${styles.dropdownIcon} ${isDropdownOpen ? styles.open : ""}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsDropdownOpen((prev) => !prev);
                        }}
                    />
                    {isDropdownOpen && (
                        <DayDropdown
                            selectedDay={selectedDay}
                            setSelectedDay={(day) => {
                                setSelectedDay(day);
                                setIsDropdownOpen(false);
                            }}
                        />
                    )}
                </div>
            </div>

            <div className={styles.cards}>
                {hours.map((hour, index) => (
                    <HourlyForecastCard
                        key={index}
                        time={hour.time}
                        temp={hour.temp}
                        icon={hour.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default HourlyForecast;