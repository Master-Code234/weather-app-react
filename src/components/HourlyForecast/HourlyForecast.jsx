import styles from "./HourlyForecast.module.css";
import HourlyForecastCard from "../HourlyForecastCard/HourlyForecastCard";
import overcastIcon from "../../assets/images/icon-overcast.webp";
import partlyCloudyIcon from "../../assets/images/icon-partly-cloudy.webp";
import sunnyIcon from "../../assets/images/icon-sunny.webp";
import snowIcon from "../../assets/images/icon-snow.webp";
import fogIcon from "../../assets/images/icon-fog.webp";
import dropDownIcon from "../../assets/images/icon-dropdown.svg";

const HourlyForecast = () => {
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
        <div className={styles.hourlyForecast}>
            <div className={styles.header}>
                <h2 className={styles.title}>Hourly forecast</h2>
                <div className={styles.selector}>
                    <span>Tuesday</span>
                    <img src={dropDownIcon} alt="" />
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