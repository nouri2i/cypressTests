/// <reference types="cypress" />

it('google test', () => {
    cy.visit("www.google.co.uk")
    cy.get("#L2AGLb > .QS5gu").click()
    cy.get('.gLFyf',{timeout:6000}).type("automation step by step {enter}")
    cy.contains('Videos').click()
    
})
it('google demo', () => {
    cy.visit('www.google.com')
})

it.only('Login demo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type("Admin")
    cy.get("[name='password']").type("admin123")
    cy.get('[type="submit').click()
    cy.contains('Admin').click()
   // cy.contains('User Management')
    // cy.contains("Add").click()
    cy.get(".orangehrm-header-container .oxd-button--secondary").click()
    // cy.get('.oxd-button--secondary').click().
    cy.get('.oxd-userdropdown-name').should("contain.text","Paul Collings")
})
