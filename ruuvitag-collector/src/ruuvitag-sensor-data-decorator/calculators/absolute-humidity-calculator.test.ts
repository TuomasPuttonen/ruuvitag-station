import { calculateAbsoluteHumidity } from './absolute-humidity-calculator';

describe('Absolute humidity point calculator', () => {
    /**
     * Test cases produced by several online calculators:
     *
     * @link http://www.michell.com/us/calculator/
     */
    const testCases: Array<[number, number, number]> = [
        [20, 10, 1.73],
        [8, 66, 5.45],
        [8, 30, 2.48],
        [23, 40, 8.22],
    ];

    it.each(testCases)
    (
        'should calculate the absolute humidity according to the specification. Temperature: %s, RH: %s % should produce: %s',
        (temperature, relativeHumidity, expectedDewPoint) => {
            expect(calculateAbsoluteHumidity(temperature, relativeHumidity)).toEqual(expectedDewPoint);
        },
    );
});
