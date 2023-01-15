describe("Home view page flow", () => {
    beforeEach(() => {
        cy.intercept('https://api.sampleapis.com/simpsons/episodes', {
            method: 'GET',
            fixture: '../fixtures/try1.json'
        })

        cy.visit("http://localhost:3000/")
    })

    it("assert true is true", () => {
        expect(true).to.equal(true)
    })
})