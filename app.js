require('dotenv').config()
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { connectMongodb } = require('./src/config/db');

const app = express();
connectMongodb()