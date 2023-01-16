describe("Error handling for 404 errors", () => {
    beforeEach(() => {
        cy.intercept('https://api.sampleapis.com/simpsons/episodes', {
            method: 'GET',
            fixture: '../fixtures/getEpisodes.json'
        })
        cy.visit("http://localhost:3000/banana")
    })
    it("Should display error message and redirect button if user enters a bad URL", () => {
        cy.get('.banner-img').should('be.visible')
        cy.get('.bad-url-text').should('contain', 'D\'oh! URL not found')
        cy.get('.redirect-button').should('contain', 'Go Back Home')
        cy.get('.sad-homer-img').should('have.attr', 'src', '/static/media/sad-homer.65f7e167de109219d207.png')
    })

    it("Should return user back to home after clicking on 'Go Back Home' button", () => {
        cy.get('.redirect-button').click()

        cy.get('.banner-img').should('be.visible')
        cy.get('.home-krusty-img').should('be.visible')
        cy.get('.home-lisa-img').should('be.visible')
        cy.get('.home-lenny-img').should('be.visible')
        cy.get('.thumbnail-img').eq(0).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGZjNzZhNzAtYTZjNi00YjU4LWI0NTYtNjZmYWNkYTA2YzY3XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(1).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1MjQ0Njg1MF5BMl5BanBnXkFtZTgwMzg2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(2).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzMwODQzMTQ4N15BMl5BanBnXkFtZTgwODU1NjQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(3).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjkzMjAzMzc4NF5BMl5BanBnXkFtZTgwNDY2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
    })
})

describe('Error handling for 500 errors', () => {
    beforeEach(() => {
        cy.intercept('https://api.sampleapis.com/simpsons/episodes', {
            method: 'GET',
            statusCode: 500
        })
    })
    it("Should display error message if API server went down while user is on home page", () => {
        cy.visit("http://localhost:3000/")

        cy.get('.banner-img').should('be.visible')
        cy.get('.server-down-text').should('contain', 'D\'oh! Something went wrong. Please try again later')
        cy.get('.sad-homer-img').should('have.attr', 'src', '/static/media/sad-homer.65f7e167de109219d207.png')
    })

    it("Should display error message if API server went down while user is on detail page", () => {
        cy.visit("http://localhost:3000/episodeDetails/1")

        cy.get('.banner-img').should('be.visible')
        cy.get('.server-down-text').should('contain', 'D\'oh! Something went wrong. Please try again later')
        cy.get('.sad-homer-img').should('have.attr', 'src', '/static/media/sad-homer.65f7e167de109219d207.png')
    })
})