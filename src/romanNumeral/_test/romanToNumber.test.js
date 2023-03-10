const romanToNumber = require('../romanToNumber')

describe('roman -> number (basic)', () => {
    it('should return 1', () => expect(romanToNumber('I')).toBe(1))
    it('should return 2', () => expect(romanToNumber('II')).toBe(2))
    it('should return 3', () => expect(romanToNumber('III')).toBe(3))
    it('should return 4', () => expect(romanToNumber('IV')).toBe(4))
    it('should return 5', () => expect(romanToNumber('V')).toBe(5))
    it('should return 6', () => expect(romanToNumber('VI')).toBe(6))

    it('should return 10', () => expect(romanToNumber('X')).toBe(10))
    it('should return 11', () => expect(romanToNumber('XI')).toBe(11))
    it('should return 16', () => expect(romanToNumber('XVI')).toBe(16))
    it('should return 20', () => expect(romanToNumber('XX')).toBe(20))
    it('should return 50', () => expect(romanToNumber('L')).toBe(50))
    it('should return 87', () => expect(romanToNumber('LXXXVII')).toBe(87))
    it('should return 98', () => expect(romanToNumber('XCVIII')).toBe(98))

    it('should return 100', () => expect(romanToNumber('C')).toBe(100))
    it('should return 200', () => expect(romanToNumber('CC')).toBe(200))
    it('should return 300', () => expect(romanToNumber('CCC')).toBe(300))
    it('should return 400', () => expect(romanToNumber('CD')).toBe(400))
    it('should return 500', () => expect(romanToNumber('D')).toBe(500))
    it('should return 600', () => expect(romanToNumber('DC')).toBe(600))
    it('should return 700', () => expect(romanToNumber('DCC')).toBe(700))
    it('should return 800', () => expect(romanToNumber('DCCC')).toBe(800))
    it('should return 900', () => expect(romanToNumber('CM')).toBe(900))

    it('should return 1000', () => expect(romanToNumber('M')).toBe(1000))
    it('should return 1999', () => expect(romanToNumber('MCMXCIX')).toBe(1999))
    it('should return 1847', () => expect(romanToNumber('MDCCCXLVII')).toBe(1847))
})
