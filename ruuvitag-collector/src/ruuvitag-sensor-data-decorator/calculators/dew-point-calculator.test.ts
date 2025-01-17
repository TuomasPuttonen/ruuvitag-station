import { calculateDewPoint } from './dew-point-calculator';

describe('Dew point calculator', () => {
    /**
     * Test cases produced by several online calculators:
     * @link http://bmcnoldy.rsmas.miami.edu/Humidity.html
     * @link http://www.decatur.de/javascript/dew/index.html
     * @link http://www.dpcalc.org/
     */
    const testCases: Array<[number, number, number]> = [
        [20, 65, 13.2],
        [11.6, 88, 9.7],
        [13, 50, 2.8],
        [16, 69, 10.3],
        [20, 50, 9.3],
    ];

    it.each(testCases)
    (
        'should calculate the dew point according to the specification. Temperature: %s, RH: %s % should produce: %s',
        (temperature, relativeHumidity, expectedDewPoint) => {
            expect(calculateDewPoint(temperature, relativeHumidity)).toEqual(expectedDewPoint);
        },
    );
});
