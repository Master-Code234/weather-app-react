import styles from "./ForecastCard.module.css";

const ForecastCard = ({ day, icon, high, low }) => {
    return (
        <div className={styles.forecastCard}>
            <p className={styles.day}>{day}</p>
            <img src={icon} alt="" className={styles.icon} />
            <div className={styles.temps}>
                <span className={styles.low}>{low}°</span>
                <span className={styles.high}>{high}°</span>
            </div>
        </div>
    );
};

export default ForecastCard;