import styles from "./WeatherStat.module.css";

const WeatherStat = ({ label, value, unit }) => {
    return (
        <div className={styles.statCard}>
            <p className={styles.label}>{label}</p>
            <p className={styles.value}>
                {value}
                {unit && <span className={styles.unit}>{unit}</span>}
            </p>
        </div>
    );
};

export default WeatherStat;