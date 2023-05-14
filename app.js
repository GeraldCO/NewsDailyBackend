import 'dotenv/config.js'
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { connectMongodb } from './src/config/db.js';

const app = express();
connectMongodb()