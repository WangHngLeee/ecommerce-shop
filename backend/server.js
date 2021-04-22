import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'
const app = express()
dotenv.config()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const port = process.env.PORT || 5000

app.listen(
  port,
  console.log(
    `server running on ${process.env.NODE_ENV} mode and listen on ${port}`
  )
)
