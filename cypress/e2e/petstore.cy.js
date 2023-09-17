describe ('petstore API inventory testing', () => {
    it ('createuser',() => {
        let body = {
            "id": 0,
            "username": "sule",
            "firstName": "albert",
             "lastName": "sule",
            "email": "233@gmail.com",
            "password": "12345",
            "phone":"0990090809800 ",
            "userStatus": 0
        }
                     cy.request('POST', 'https://petstore.swagger.io/v2/user',body).as('createuser'); 
                        cy.get('@createuser').then(createuser => {
                            expect(createuser.status).to.equal(200);
                    });
                });
            })
