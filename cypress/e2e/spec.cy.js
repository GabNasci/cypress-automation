describe('Suíte de testes do integrado.', () => {

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

  it('Deve a opção de graduação e informar CPF e DATA NASCIMENTO.', () => {
    cy.visit('https://portal.apprbs.com.br/ceigraduacao/login')
    cy.get('#mat-input-0').type('000.000.000-00')
    cy.get('#mat-input-1').type('14/02/2025')
    cy.contains('Acessar').should('exist').first().click()

    cy.get('.ps-notification-title').should('have.text', 'Não foi possivel o login')

  })

})

describe.only('Suíte de testes MageBit', () => {
  it('Deve acessar a página e validar o título.', () => {
    cy.visit('http://magento2-demo.magebit.com')
    cy.contains('Create an Account').should('exist').first().click()
    cy.url().should('eq', 'https://magento2-demo.magebit.com/customer/account/create/')

    cy.get('#firstname').type('Lal')

    cy.get('#lastname').type('de Lilson')

    cy.get('#is_subscribed').first().click()

    cy.get('#email_address').type('sta8990@uorak.com')

    cy.get('#password').type('CCnNmXbkJDbqw5n')

    cy.get('#password-confirmation').type('CCnNmXbkJDbqw5n')

    cy.get('button[title="Create an Account"]').first().click()

    cy.get('.message-success').should('contain', 'Thank you for registering with Main Website Store.')
  })
})

