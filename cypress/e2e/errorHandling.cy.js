describe("Error handling (404/500 Error)", () => {
    // beforeEach(() => {
    //     cy.intercept('https://api.sampleapis.com/simpsons/episodes', {
    //         method: 'GET',
    //         fixture: '../fixtures/getEpisodes.json'
    //     })
    //     cy.visit("http://localhost:3000/")
    // })

    it("Should display message and button if user enter bad URL", () => {
        cy.intercept('https://api.sampleapis.com/simpsons/episodes', {
            method: 'GET',
            fixture: '../fixtures/getEpisodes.json'
        })
        cy.visit("http://localhost:3000/banna")
        cy.get('.bad-url-text').should('contain', 'D\'oh! URL not found')
        cy.get('.redirect-button').should('contain', 'Go Back Home')
        cy.get('.sad-homer-img').should('have.attr', 'src', '/static/media/sad-homer.65f7e167de109219d207.png')
    })
})