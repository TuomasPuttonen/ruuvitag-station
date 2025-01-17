/**
 * Calculates the dew point using the Magnus formula.
 *
 * @see http://irtfweb.ifa.hawaii.edu/~tcs3/tcs3/Misc/Dewpoint_Calculation_Humidity_Sensor_E.pd
 * @see Meteorological Measurements and Instrumentation (Giles Harrison) pages 108-109.
 *
 * @return Returns the Dew point in Celsius (C).
 */
export const calculateDewPoint = (temperatureInCelsius: number, relativeHumidityInPercents: number) => {
    const constant1 = 243.12;
    const constant2 = 17.62;

    const dewPoint = constant1
        * (
            Math.log(relativeHumidityInPercents / 100)
            + ((constant2 * temperatureInCelsius) / (constant1 + temperatureInCelsius))
        ) / (
            constant2
            - Math.log(
                relativeHumidityInPercents / 100,
            )
            - (
                (constant2 * temperatureInCelsius) / (constant1 + temperatureInCelsius)
            )
        );

    return parseFloat(dewPoint.toFixed(1));
};
