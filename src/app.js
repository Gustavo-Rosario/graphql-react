import express from 'express'
import bodyParser from 'body-parser'
import graphqlHttp from 'express-graphql'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import { mongo } from '../config'

import {
    GraphQlSchema,
    GraphQlResolvers
} from './graphql'

const app = express()
app.use(bodyParser.json())

// configure our app to handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, x-access-token, content-type, Authorization');
	next();
});
 
// log all requests to the console 
app.use(morgan('dev'));

app.use(cors());

// connect to our database (hosted on modulus.io). Implementar a reconexão com o bd qdo
// ficar offline.
mongoose.Promise = require('bluebird')
mongoose.connect(mongo.url,{ useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error db:'))
db.on('connected', console.info.bind(console, 'Mongo connected'))
//BUILD GraphQL
app.use('/graphql', graphqlHttp({
    schema: GraphQlSchema,
    rootValue: GraphQlResolvers,
    graphiql: true
}))

app.listen(3000)