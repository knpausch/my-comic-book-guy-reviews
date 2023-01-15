describe("Button interaction page flow", () => {
    beforeEach(() => {
        cy.intercept('https://api.sampleapis.com/simpsons/episodes', {
            method: 'GET',
            fixture: '../fixtures/getEpisodes.json'
        })
        cy.visit("http://localhost:3000/")
        cy.get('.thumbnail-img').eq(0).click()
    })

    it("Should return home after clicking home button on Episode Detail view", () => {
        cy.get('.go-back-button').click()
        
        cy.get('.banner-img').should('be.visible')
        cy.get('.home-krusty-img').should('be.visible')
        cy.get('.home-lisa-img').should('be.visible')
        cy.get('.home-lenny-img').should('be.visible')
        cy.get('.thumbnail-img').eq(0).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGZjNzZhNzAtYTZjNi00YjU4LWI0NTYtNjZmYWNkYTA2YzY3XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(1).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1MjQ0Njg1MF5BMl5BanBnXkFtZTgwMzg2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(2).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzMwODQzMTQ4N15BMl5BanBnXkFtZTgwODU1NjQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(3).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjkzMjAzMzc4NF5BMl5BanBnXkFtZTgwNDY2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
    })

    it("Should move episode thumbnail from bank to krusty rank after selecting krusty rating", () => {
        cy.get('#krusty-button').click()

        cy.get('.mini-krusty-container').find("img").should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGZjNzZhNzAtYTZjNi00YjU4LWI0NTYtNjZmYWNkYTA2YzY3XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(0).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1MjQ0Njg1MF5BMl5BanBnXkFtZTgwMzg2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(1).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzMwODQzMTQ4N15BMl5BanBnXkFtZTgwODU1NjQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(2).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjkzMjAzMzc4NF5BMl5BanBnXkFtZTgwNDY2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
    })

    it("Should move episode thumbnail from bank to lisa rank after selecting lisa rating", () => {
        cy.get('#lisa-button').click()

        cy.get('.mini-lisa-container').find("img").should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGZjNzZhNzAtYTZjNi00YjU4LWI0NTYtNjZmYWNkYTA2YzY3XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(0).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1MjQ0Njg1MF5BMl5BanBnXkFtZTgwMzg2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(1).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzMwODQzMTQ4N15BMl5BanBnXkFtZTgwODU1NjQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(2).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjkzMjAzMzc4NF5BMl5BanBnXkFtZTgwNDY2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
    })

    it("Should move episode thumbnail from bank to lenny rank after selecting lenny rating", () => {
        cy.get('#lenny-button').click()

        cy.get('.mini-lenny-container').find("img").should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGZjNzZhNzAtYTZjNi00YjU4LWI0NTYtNjZmYWNkYTA2YzY3XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(0).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1MjQ0Njg1MF5BMl5BanBnXkFtZTgwMzg2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(1).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzMwODQzMTQ4N15BMl5BanBnXkFtZTgwODU1NjQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(2).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjkzMjAzMzc4NF5BMl5BanBnXkFtZTgwNDY2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
    })

    it("Should move 2 episodes from bank to krusty rank after selecting krusty rating for both of them", () => {
        cy.get('#krusty-button').click()
        cy.get('.thumbnail-img').eq(0).click()
        cy.get('#krusty-button').click()

        cy.get('.mini-krusty-container').find("img").eq(0).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGZjNzZhNzAtYTZjNi00YjU4LWI0NTYtNjZmYWNkYTA2YzY3XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.mini-krusty-container').find("img").eq(1).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1MjQ0Njg1MF5BMl5BanBnXkFtZTgwMzg2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(0).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzMwODQzMTQ4N15BMl5BanBnXkFtZTgwODU1NjQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(1).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjkzMjAzMzc4NF5BMl5BanBnXkFtZTgwNDY2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
    })

    it("Should move 3 episodes from bank after selecting a unqiue rating for each of them", () => {
        cy.get('#krusty-button').click()
        cy.get('.thumbnail-img').eq(0).click()
        cy.get('#lisa-button').click()
        cy.get('.thumbnail-img').eq(0).click()
        cy.get('#lenny-button').click()

        cy.get('.mini-krusty-container').find("img").should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGZjNzZhNzAtYTZjNi00YjU4LWI0NTYtNjZmYWNkYTA2YzY3XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.mini-lisa-container').find("img").should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1MjQ0Njg1MF5BMl5BanBnXkFtZTgwMzg2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.mini-lenny-container').find("img").should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzMwODQzMTQ4N15BMl5BanBnXkFtZTgwODU1NjQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
        cy.get('.thumbnail-img').eq(0).should('have.attr', 'src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjkzMjAzMzc4NF5BMl5BanBnXkFtZTgwNDY2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg')
    })
})