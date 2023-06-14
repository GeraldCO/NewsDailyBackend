import 'dotenv/config.js'
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connectMongodb } from './src/config/db.js';
import { typeDefs } from './src/graphql/typeDefs.js'
import { resolvers } from './src/graphql/resolvers.js'

const app = express();
connectMongodb()

const port = process.env.PORT

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port }
})

console.log(`🚀  Server ready at: ${url}`);