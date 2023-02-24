import { getMonth } from "./function-task5";

describe('tests for getMonth function', () => {
    it('should invalid - no input date', () => expect(getMonth()).toBe('данные не были введены'));
    it('should invalid for (month < 1), for (month > 12)', () => {
        expect(getMonth(0)).toBe('такого месяца не существует');
        expect(getMonth(13)).toBe('такого месяца не существует');
    });
    it('should invalid for (month is not number)', () => {
        expect(getMonth([9, 8])).toBe('такого месяца не существует');
        expect(getMonth('9')).toBe('такого месяца не существует')
    });
    it('should invalid for (month is not integer)', () => expect(getMonth(8.5)).toBe('такого месяца не существует'));
    it('should month-name for (month >= 1 and month <= 12)', () => {
        expect(getMonth(1)).toBe('1 месяц - январь');
        expect(getMonth(3)).toBe('3 месяц - март');
        expect(getMonth(5)).toBe('5 месяц - май');
        expect(getMonth(7)).toBe('7 месяц - июль');
        expect(getMonth(9)).toBe('9 месяц - сентябрь');
        expect(getMonth(10)).toBe('10 месяц - октябрь');
        expect(getMonth(12)).toBe('12 месяц - декабрь');
    });
});