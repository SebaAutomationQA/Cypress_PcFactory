/// <reference types='cypress' />

require('cypress-xpath')
require('cypress-plugin-tab')


describe('Flujo 1 Pc Factory', () =>{
  it('Buscar Producto',() =>{
    let tiempo=500
    cy.visit('https://www.pcfactory.cl/')
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    cy.title().should('eq','Tienda de tecnología en Chile | pc Factory')
    cy.wait(tiempo)
  })
})//Cierre de describe