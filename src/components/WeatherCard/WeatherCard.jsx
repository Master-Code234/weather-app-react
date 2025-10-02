import styles from "./WeatherCard.module.css";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import sunIcon from "../../assets/images/icon-sunny.webp";

const WeatherCard = () => {
    return (
        <div className={styles.weatherCard}>
            <WeatherInfo
                city="Berlin"
                country="Germany"
                date="Tuesday, Aug 5, 2025"
                icon={sunIcon}
                temperature={20}
            />
        </div>

    );
};

export default WeatherCard;