describe('Suíte de testes do google.', () => {
  it('Deve acessar a página do google.', () => {
    cy.visit('https://www.google.com')
  })

  it('Deve visitar a página e validar o título.', () => {
    cy.visit('https://www.google.com')
    cy.title().should('eq', 'Google')
  })
  
})

describe.only('Suíte de testes MageBit', () => {
  it('Deve acessar a página e validar o título.', () => {
    cy.visit('http://magento2-demo.magebit.com')
    cy.title().should('eq', 'Magento 2 Commerce (Enterprise) Demo - Magebit')
  })
})

