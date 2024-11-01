const router = require("express").Router();
const {Product} = require("../models/Product.js");

router.post('/', (req, res) => {
    const skip = parseInt(req.body.skip);
    const filters = req.body.filters
    Product.find(filters)
    .populate("_category")
    .skip(skip)
    .limit()
    .exec()
    .then((data,error) =>{
        if(error) return res.status(400).json({status: false, error});
        return res.status(200).json({
            status:true,
            message: "get Product successfully",
            data,
        });
    });
});Product

router.post("/create", (req, res) => {
    const product = new Product(req.body);
    product.save((error, data) => {
        if(error) return res.status(400).json({status: false, error});
        return res.status(200).json({
            status:true,
            message: "Product has been added successfully",
            data,
        });
    })
})

module.exports = router;