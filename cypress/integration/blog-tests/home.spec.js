describe('home page renders proeprly', () => {
    it('finds the website properly', () => {
        cy.visit('https://one-mum-her-journey.herokuapp.com/')
        cy.contains('My-Journey')
    })
})
context('Home page', () => {
    beforeEach(() => {
      cy.visit('https://one-mum-her-journey.herokuapp.com/')
    })

    it('clicks the link', () => {
        cy.contains('About Me').click()
        cy.url().should('include', '/#AboutMe')
    })

    it('checks the back to top button',() => {
        cy.get('.is-current', ()=> {
            cy.click()
        })

    })
    it('finds the Projects', () => {
        cy.contains('Embracing-blue')
    })

 it('finds  the Contacts', () => {
        cy.contains('Email', () => {
        cy.click()
        
        
        })
    
})
})