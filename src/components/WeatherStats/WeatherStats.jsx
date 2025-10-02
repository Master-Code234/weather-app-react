import styles from "./WeatherStats.module.css";
import WeatherStat from "../WeatherStat/WeatherStat";

const WeatherStats = () => {
    const stats = [
        { label: "Feels Like", value: 18, unit: "°" },
        { label: "Humidity", value: 46, unit: "%" },
        { label: "Wind", value: 14, unit: " km/h" },
        { label: "Precipitation", value: 0, unit: " mm" },
    ];

    return (
        <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
                <WeatherStat
                    key={index}
                    label={stat.label}
                    value={stat.value}
                    unit={stat.unit}
                />
            ))}
        </div>
    );
};

export default WeatherStats;