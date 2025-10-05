import { useState } from "react";
import styles from "./UnitsDropdown.module.css";
import DropdownButton from "../DropdownButton/DropdownButton";

const UnitsDropdown = () => {
    const [unitSystem, setUnitSystem] = useState("metric");
    const [temperatureUnit, setTemperatureUnit] = useState("celsius");
    const [windUnit, setWindUnit] = useState("km/h");
    const [precipUnit, setPrecipUnit] = useState("mm");

    const toggleUnitSystem = () => {
        if (unitSystem === "metric") {
            setUnitSystem("imperial");
            setTemperatureUnit("fahrenheit");
            setWindUnit("mph");
            setPrecipUnit("in");
        } else {
            setUnitSystem("metric");
            setTemperatureUnit("celsius");
            setWindUnit("km/h");
            setPrecipUnit("mm");
        }
    };

    return (
        <div className={styles.dropdown}>
            <DropdownButton
                label={`Switch to ${unitSystem === "metric" ? "imperial" : "metric"}`}
                onClick={toggleUnitSystem}
                hideCheckmark={true}
                className={unitSystem === "imperial" ? styles.modeActive : ""}
            />

            <h4 className={styles.sectionTitle}>Temperature</h4>
            <DropdownButton
                label="Celsius (°C)"
                active={temperatureUnit === "celsius"}
                onClick={() => setTemperatureUnit("celsius")}
            />
            <DropdownButton
                label="Fahrenheit (°F)"
                active={temperatureUnit === "fahrenheit"}
                onClick={() => setTemperatureUnit("fahrenheit")}
            />

            <h4 className={styles.sectionTitle}>Wind speed</h4>
            <DropdownButton
                label="km/h"
                active={windUnit === "km/h"}
                onClick={() => setWindUnit("km/h")}
            />
            <DropdownButton
                label="mph"
                active={windUnit === "mph"}
                onClick={() => setWindUnit("mph")}
            />

            <h4 className={styles.sectionTitle}>Precipitation</h4>
            <DropdownButton
                label="millimeters (mm)"
                active={precipUnit === "mm"}
                onClick={() => setPrecipUnit("mm")}
            />
            <DropdownButton
                label="inches (in)"
                active={precipUnit === "in"}
                onClick={() => setPrecipUnit("in")}
            />
        </div>
    );
};

export default UnitsDropdown;
