import {
    importSchema
} from 'graphql-import'
import {
    makeExecutableSchema
} from 'graphql-tools'
import rv from './queries/rootValue'

const schemaGQL = importSchema('schema.graphql')

export const schema = makeExecutableSchema({
    schemaGQL,
    rv
})