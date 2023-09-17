const { defineConfig } = require ('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://petstore.swagger.io/v2',
        specPatern:'cypress/support/e2e',
        supportFile :'false',
        username:'albert'

    },
    env:{
        username:'albert'
    }
})