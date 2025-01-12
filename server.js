import 'dotenv/config.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'



import { router as activityRouter } from './routes/activities.js'

import './config/database.js'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())


app.use('/', activityRouter)

app.use(function (req, res, next) {
  res.status(404).json({ err: 'Not found' })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

export { app }
