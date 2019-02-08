import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = importSchema('./src/graphql/queries/rootQuery.graphql')

export const GraphQlSchema = makeExecutableSchema({
    typeDefs
})

export const GraphQlResolvers = resolvers