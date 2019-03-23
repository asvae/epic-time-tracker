import express from 'express'
import { graphqlApiPlugin } from './plugins/graphql-api'
import { socketIoPlugin } from './plugins/socket-io-plugin'

const app = express()
graphqlApiPlugin(app)
socketIoPlugin(app)
