import express from 'express'
import bodyParser from 'body-parser'
import graphqlHttp from 'express-graphql'

const app = express()

app.use(bodyParser.json())
app.get('/', (_, res) => res.json({"api":"working"}) )
app.listen(3000)
