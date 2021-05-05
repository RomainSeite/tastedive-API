Cypress.Commands.add('send', (query, type) => {
    cy.request({
        url: 'https://tastedive.com/api/similar',
        qs: {
            q: query,
            type: type,
            limit: 70 ,
            k: '409885-Romain-VN04I21V'
        }
    }) 
}) 