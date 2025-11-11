import { createSchema } from 'graphql-yoga'
import { resolvers } from './resolvers.js'

export const schema = createSchema({
    typeDefs: /* GraphQL */ `
    type ClimbingRoute {
    id: ID!,
    name: String!,
    difficulty: String!,
    outingsBooked: Boolean!,
    averageRating: Float!,
    category: String!,
    }

    type ClimbingRoutes {
    climbingRoutes: [ClimbingRoute!]!
    count: Int!
    }

    type Query {
    climbingRoutes: [ClimbingRoute!]!
    getRoutes(category: String): ClimbingRoutes!
    }`,
    resolvers
})