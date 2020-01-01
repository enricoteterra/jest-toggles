var toggles = require('./toggles')

describe('navbar', () => {

    beforeEach(() => {
        toggles.newNavbar = false
    })
    
    test("new navbar", () => {
        toggles.newNavbar = true
        expect(toggles.newNavbar).toBe(true)
    })

    test("old navbar", () => {
        expect(toggles.newNavbar).toBe(false)
    })
})