describe.only('Suíte de testes do integrado.', () => {

  it('Deve visitar a página do integrado validar campos Área do Candidato e Inscreva-se e o Título', () => {
    cy.visit('https://grupointegrado.br')
    cy.title().should('eq', 'Início | Centro Universitário Integrado')
    cy.contains('Área do candidato').should('exist')
    cy.contains('Inscreva-se').should('exist')
  })

  it('Deve clicar na opção Área do candidato e validar url', () => {
    cy.visit('https://grupointegrado.br')
    cy.contains('Área do candidato').should('exist').first().click()
    cy.url().should('eq', 'https://www.grupointegrado.br/#area-candidato')

  })

  it.only('Deve a opção de graduação e informar CPF e DATA NASCIMENTO.', () => {
    cy.visit('https://portal.apprbs.com.br/ceigraduacao/login')
    cy.get('#mat-input-0').type('000.000.000-00')
    cy.get('#mat-input-1').type('14/02/2025')
    cy.contains('Acessar').should('exist').first().click()

    cy.get('.ps-notification-title').should('have.text', 'Não foi possivel o login')

  })

})

describe('Suíte de testes MageBit', () => {
  it('Deve acessar a página e validar o título.', () => {
    cy.visit('http://magento2-demo.magebit.com')
    cy.title().should('eq', 'Magento 2 Commerce (Enterprise) Demo - Magebit')

  })
})

