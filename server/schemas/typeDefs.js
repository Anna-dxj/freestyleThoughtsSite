const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type EmailResponse {
        success: Boolean!
        subject: String
        message: String
    },
    
    type Query {
        dummyQuery: String
    }
    
    type Mutation {
        submitForm(name: String!, subject: String!, message: String!): EmailResponse
    }
`

module.exports = typeDefs