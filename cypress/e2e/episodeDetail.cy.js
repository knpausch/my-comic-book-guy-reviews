describe("Detail view page flow", () => {
    beforeEach(() => {
        cy.intercept('https://api.sampleapis.com/simpsons/episodes', {
            method: 'GET',
            fixture: '../fixtures/getEpisodes.json'
        })
        cy.visit("http://localhost:3000/")
    })

    it("When user clicks on an episode, it displays its details, episode image, home button, krusty, lisa, and lenny rank buttons with accompanying texts", () => {
        cy.get('.thumbnail-img').eq(0).click()

        cy.get('.episode-sheet').should('contain', 'Simpsons Roasting on an Open Fire')
            .and('contain', 'Season: 1')
            .and('contain', 'Episode: 1')
            .and('contain', 'Description:')
            .and('contain', 'When Homer receives no holiday bonus, he hopes to make extra money by becoming a Mall Santa, in an attempt to bring the family a happy holiday.')
            .and('contain', '⭐️Audience Score: 8.2/10')
            .and('contain', '📺Air Date: 09/01/1990')

        cy.get('.episode-img').should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGZjNzZhNzAtYTZjNi00YjU4LWI0NTYtNjZmYWNkYTA2YzY3XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        
        cy.get('.go-back-button').contains('Home')

        cy.get('.rank-img').eq(0).should('have.attr', 'src', '/static/media/krusty.f9261146969fbf2a442f.png')
        cy.get('.button-ui').should('contain', '"What the hell was that?"')
        cy.get('.rank-img').eq(1).should('have.attr', 'src', '/static/media/lisa.734c5999aaecca6c7917.png')
        cy.get('.button-ui').should('contain', '"Meh"')
        cy.get('.rank-img').eq(2).should('have.attr', 'src', '/static/media/lenny.b6ce25fd0dc19224b8cf.png')
        cy.get('.button-ui').should('contain', 'Lenny Approved')
    })
})