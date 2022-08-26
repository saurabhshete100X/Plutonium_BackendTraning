const orderModel = require("../models/orderModel")

const createOrder = async function (req, res) {
    let data = req.body
    let userId = data.userId                                                                      //     Get userId 
    let productId = data.productId                                                               //    Get productId 
    if (!userId) return res.send({ msg: 'UserId is mandatory in the request' })                 //   not getting userId then showing error
    if (!productId) return res.send({ msg: 'ProductId is mandatory in the request' })          //  not getting productId then showing error
    
    let savedData = await orderModel.create(data)
    res.send({ data: savedData })
}

module.exports.createOrder = createOrder

