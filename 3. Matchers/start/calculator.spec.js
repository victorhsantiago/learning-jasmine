describe('calculator.js', function () {
    it('should add numbers to the total', function () {
        const calculator = new Calculator()
        calculator.add(5)

        expect(calculator.total).toBe(5)
    })

    it('should subtract numbers from the total', function () {
        const calculator = new Calculator()
        calculator.subtract(5)

        expect(calculator.total).toBe(-5)
    })

    it('should multiply the total by number', function () {
        const calculator = new Calculator()
        calculator.multiply(5)

        expect(calculator.total).toBe(0)
    })

    it('should divide the total by number', function () {
        const calculator = new Calculator()
        calculator.total = 30
        calculator.divide(6)

        expect(calculator.total).toBe(5)
    })

    it('should initialize the total and total be false', function () {
        const calculator = new Calculator()

        expect(calculator.total).toBe(0)
        expect(calculator.total).toBeFalsy()
    })

    it('has constructor', function () {
        const calculator = new Calculator()
        const calculator2 = new Calculator()

        expect(calculator).toEqual(calculator2)
    })

    it('can be instantiated', function () {
        jasmine.addMatchers(customMatchers)

        const calculator = new Calculator()
        const calculator2 = new Calculator()

        expect(calculator).toBeCalculator() //custom!
        expect(calculator).toBeTruthy()
        expect(calculator2).toBeTruthy()
        expect(calculator.constructor.name).toContain('Calc')
    })

    it('instatiates unique object', function () {
        const calculator = new Calculator()
        const calculator2 = new Calculator()

        expect(calculator).not.toBe(calculator2)
    })

    it('has commom operations', function () {
        const calculator = new Calculator()

        expect(calculator.add).toBeDefined() // or not.toBeUndefined
        expect(calculator.subtract).toBeDefined()
        expect(calculator.multiply).not.toBeUndefined() // or toBeDefined
        expect(calculator.divide).not.toBeUndefined()
    })

    it('should be null', function () {
        const calculator = new Calculator()

        calculator.total = null
        expect(calculator.total).toBeNull()
    })

    it('does not handle NaN', function () {
        const calculator = new Calculator()

        calculator.total = 20
        calculator.multiply('a')

        expect(calculator.total).toBeNaN()
    });

    it('handles divide by zero', function () {
        const calculator = new Calculator()

        expect(function () { calculator.divide(0) }).toThrow()
        expect(function () { calculator.divide(0) }).toThrowError(Error)
        expect(function () { calculator.divide(0) }).toThrowError(Error, 'Cannot divide by zero')
    });

    it('return total', function () {
        const calculator = new Calculator();
        calculator.total = 50

        expect(calculator.add(20)).toBe(70)
        expect(calculator.total).toMatch(/-?\d/)
        expect(typeof calculator.total).toMatch('number')
        //assymmetric matchers
        //not equal in each side
        expect(calculator.total).toEqual(jasmine.anything())
    })
})