class RestRequests {
        doPostRequestWithBody(bodyRequest, resource) {
        return cy.request({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: bodyRequest,
            url: resource,
            failOnStatusCode: false
        }).as('response')
    }

    doGetRequestWithBody(bodyRequest, resource) {
        return cy.request({
            method: 'GET',
            body: bodyRequest,
            url: resource,
            failOnStatusCode: false 
        }).as('response');
    }

    doGetRequest(resource) {
        return cy.request({
            method: 'GET',
            url: resource,
            failOnStatusCode: false
        }).as('response')
    }
}

export default RestRequests