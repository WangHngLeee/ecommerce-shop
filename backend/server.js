import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRouter from './routes/productRoute.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()

connectDB()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRouter)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(
  port,
  console.log(
    `server running on ${process.env.NODE_ENV} mode and listen on ${port}`
  )
)
