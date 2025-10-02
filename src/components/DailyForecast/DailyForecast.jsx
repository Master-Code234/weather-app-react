import styles from "./DailyForecast.module.css";
import ForecastCard from "../ForecastCard/ForecastCard";
import rainIcon from "../../assets/images/icon-rain.webp";
import drizzleIcon from "../../assets/images/icon-drizzle.webp";
import sunIcon from "../../assets/images/icon-sunny.webp";
import partlyCloudyIcon from "../../assets/images/icon-partly-cloudy.webp";
import stormIcon from "../../assets/images/icon-storm.webp";
import snowIcon from "../../assets/images/icon-snow.webp";
import fogIcon from "../../assets/images/icon-fog.webp";

const DailyForecast = () => {
    const forecastData = [
        { day: "Tue", icon: rainIcon, high: 20, low: 18 },
        { day: "Wed", icon: drizzleIcon, high: 28, low: 20 },
        { day: "Thu", icon: sunIcon, high: 22, low: 16 },
        { day: "Fri", icon: partlyCloudyIcon, high: 27, low: 19 },
        { day: "Sat", icon: stormIcon, high: 21, low: 15 },
        { day: "Sun", icon: snowIcon, high: 29, low: 22 },
        { day: "Mon", icon: fogIcon, high: 23, low: 17 },
    ];

    return (
        <section className={styles.dailyForecast}>
            <h2 className={styles.title}>Daily forecast</h2>
            <div className={styles.forecastGrid}>
                {forecastData.map((forecast, index) => (
                    <ForecastCard
                        key={index}
                        day={forecast.day}
                        icon={forecast.icon}
                        high={forecast.high}
                        low={forecast.low}
                    />
                ))}
            </div>
        </section>
    );
};

export default DailyForecast;