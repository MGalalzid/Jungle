describe('Jungle test scenarios', () => {
    beforeEach(() => {
        cy.visit('https://jungle.co/')
      })

    it('TS-1_Verify that Home page content is loaded successfully', () => {
        // Test Case #1: Verify that URL is reachable
        cy.url().should('eq', 'https://jungle.co/') 
        // Test Case #2: Verify that Get Started section is displayed successfully 
        cy.get('.banner-text__headline').should('contain', 'Buy, Sell & Create Digital Art')
        // Test Case #3: Verify that Footer is displayed successfully 
        cy.get('.slogan__title').contains('Never miss a drop!')

   
        })

    it('TS-2_Verify joining Jungle mailing list', () => {
        cy.get('.subscribe-box__input-field').type('NFT@Jungle.com')
        cy.get('.subscribe-box__submit').click()
        cy.get('.jsState').should('contain', 'Thank you, You are in!')
    
        })

    it('TS-3_Verify adding email address (without @) ', () => {
        cy.get('.subscribe-box__input-field').type('NFT.com')
        cy.get('.subscribe-box__submit').click()
        cy.get('.jsState').should('not.have.value', 'Thank you, You are in!')
    
        })
    
    it('TS-4_Verify adding email address without domain', () => {
        cy.get('.subscribe-box__input-field').type('NFT@')
        cy.get('.subscribe-box__submit').click()
        cy.get('.jsState').should('not.have.value', 'Thank you, You are in!')
        })

    it('TS-5_Verify that user gets to How to find NFT Sales page and reference links', () => {
        cy.get(':nth-child(5) > .nav__link').click()
        cy.url().should('eq', 'https://jungle.co/faq/')
        cy.get(':nth-child(1) > .faq-list__item__link').click({force: true})
        // Test Case #1: Verifying that NFT image is visiable 
        cy.get('.article__content > picture > .img-').should("be.visible")
        // Test Case #2: Verifying that URL is reachable
        cy.url().should('eq', 'https://jungle.co/faq/where-can-i-find-nft-sales/')
        // Test Case #3: Verifying the reference link is exist  
        cy.get('[href="https://cointelegraph.com/news/what-is-etherscan-and-how-does-it-work"]').should('be.visible')

        })


})

    