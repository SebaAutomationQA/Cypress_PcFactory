/// <reference types="Cypress" />

describe(" titulo general ", () =>{

    it(" titulo del caso ",() =>{
        let tiempo=500
        cy.visit("  ")
        cy.title().should('eq',' titulo pagina ')
        cy.wait(tiempo)
    })
})//Cierre de describe