import styles from "./HourlyForecastCard.module.css";

const HourlyForecastCard = ({ time, temp, icon }) => {
    return (
        <div className={styles.card}>
            <img src={icon} alt="" className={styles.icon} />
            <div className={styles.weatherData}>
                <p className={styles.time}>{time}</p>
                <p className={styles.temp}>{temp}°</p>
            </div>
        </div>
    );
};

export default HourlyForecastCard;