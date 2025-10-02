import styles from "./App.module.css"
import Header from "./components/Header/Header"
import SearchBar from "./components/SearchBar/SearchBar"
import WeatherCard from "./components/WeatherCard/WeatherCard"
import WeatherStats from "./components/WeatherStats/WeatherStats"
import DailyForecast from "./components/DailyForecast/DailyForecast"
import HourlyForecast from "./components/HourlyForecast/HourlyForecast"

const App = () => {

  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>How’s the sky looking today?</h1>
        <SearchBar />
        <div className={styles.contentContainer}>
          <div className={styles.contentLeft}>
            <WeatherCard />
            <WeatherStats />
            <DailyForecast />
          </div>
          <div className={styles.contentRight}>
            <HourlyForecast />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
