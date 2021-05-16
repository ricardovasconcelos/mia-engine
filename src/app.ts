import dotenv from 'dotenv'
import 'reflect-metadata'
import express from 'express'
import { router } from './routes'
import Cors from 'cors'

import './database'
dotenv.config();

const app = express()
app.use(Cors)
app.use(express.json())
app.use(router)

export { app }