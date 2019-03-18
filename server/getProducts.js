const products = require('../products.json')


module.exports = {
    getProducts: (req, res) => {
        if(req.query.price){
            const searchedPrice = products.filter((item) => item.price >= req.query.price * 1)
            res.status(200).send(searchedPrice)
        }
        res.status(200).send(products)
        },
    getProductId: (req, res) => {
        const {id} = req.params
        const product = products.filter((item) => item.id == id)
        if(!product[0]){
            res.status(500).send('Item not in list')
        } else{
            res.status(200).send(product)
              }
    }
}