describe('Test API avec Tastedive', () => {
    //uncomment the line below to be prompted what you like
    //let usertaste = window.prompt("What do you like ?"," ");
    it('envoie une requête et traite la réponse', () => {
        cy.fixture('tastes')
            .then(tastes => {
                tastes.content.forEach(taste => {
                    cy.send(taste.name, taste.type)
                        .then(response => {
                            response.body.Similar.Results.forEach(suggestion => {
                                cy.writeFile(taste.name,
                                    `${suggestion.Name} (${suggestion.Type})\n`,
                                        { flag: 'a+' })
                            })
                        })
                })
            })
        cy.send(usertaste, 'any type')
            .then(response => {
                response.body.Similar.Results.forEach(suggestion => {
                    cy.writeFile(usertaste,
                        `${suggestion.Name} (${suggestion.Type})\n`,
                            { flag: 'a+' })
                })
            })
    })
})