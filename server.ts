import { createServer } from 'http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema.js'

const yoga = createYoga({
    schema,
    graphqlEndpoint: '/graphql',
})

const server = createServer(yoga)

server.listen(4000, () => {
    console.log('🚀 GraphQL ready at http://localhost:4000/graphql')
})