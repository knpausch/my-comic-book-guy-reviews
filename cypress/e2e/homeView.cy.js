describe("Home view page flow", () => {
    beforeEach(() => {
        cy.intercept('https://api.sampleapis.com/simpsons/episodes', {
            method: 'GET',
            fixture: '../fixtures/getEpisodes.json'
        })
        cy.visit("http://localhost:3000/")
    })

    it("Should load elements banner image, rank images, and 4 episode thumbnails in the bank upon page load", () => {
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