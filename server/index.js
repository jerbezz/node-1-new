const express = require('express')
const app = express()

const getProducts = require('./getProducts')


app.get('/api/products', getProducts.getProducts)

app.get('/api/product/:id', getProducts.getProductId)







const PORT = 5555
app.listen(PORT, () => console.log(`listening on ${PORT}`))