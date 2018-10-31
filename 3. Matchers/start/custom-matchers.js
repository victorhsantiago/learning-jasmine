const customMatchers = {
    toBeCalculator: function () {
        return {
            compare: function (actual) {
                const result = {
                    pass: true,
                    message: ''
                }

                if (result.pass) {
                    //TODO
                } else {
                    result.message = 'Expected ' + actual + ' to be instace of Calculator'
                }

                return result
            }
        }
    }
}