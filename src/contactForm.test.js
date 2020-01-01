var toggles = require('./toggles')

describe('navbar', () => {

    beforeEach(() => {
        toggles.contactForm = true
    })
    
    test("contactform", () => {
        expect(toggles.contactForm).toBe(true)
    })
})