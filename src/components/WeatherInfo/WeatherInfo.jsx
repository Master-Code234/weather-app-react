import styles from "./WeatherInfo.module.css";

const WeatherInfo = ({ city, country, date, icon, temperature }) => {
    return (
        <div className={styles.weatherInfo}>
            <div className={styles.locationInfo}>
                <h2 className={styles.location}>{city}, {country}</h2>
                <p className={styles.date}>{date}</p>
            </div>
            <div className={styles.weatherConditions}>
                <img src={icon} alt="" className={styles.icon} />
                <p className={styles.temperature}>{temperature}°</p>
            </div>
        </div>
    );
};

export default WeatherInfo;