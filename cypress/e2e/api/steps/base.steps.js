import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then('deve ser exibida a mensagem {string} no corpo da resposta', (mensagem) => {
    cy.get('@response').then(resp => {
        expect(resp.body.message).to.equal(mensagem)
    })
})

Then('é retornado o status code {int}', (statusCode) => {
    cy.get('@response').then(resp => {
        expect(resp.status).to.equal(statusCode)
    })
})