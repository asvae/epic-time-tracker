// Construct a schema, using GraphQL schema language
import { buildSchema } from 'graphql'
import graphqlHTTP from 'express-graphql'
import { Express } from 'express'

export const graphqlApiPlugin = (app: Express) => {
  // TODO Replace with something real.
  const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
  const root = {
    hello: () => {
      return 'Hello world!'
    },
  }

  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }))
  app.listen(4000)
  console.log('Running a GraphQL API server at localhost:4000/graphql')
}


