const ProductModel = require("../models/productModel")

const createProduct = async function (req, res) {
    let data = req.body
    let ProductData = await ProductModel.create(data)
    res.send({ "Product Created Sucessfully": ProductData })
}



module.exports.createProduct = createProduct

