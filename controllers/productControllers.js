import { Product } from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()



        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const createProduct = async (req, res) => {
    try {
        console.log(req.body);
        const { name, price, description } = req.body;
        const product = await Product.create({
            name,
            price,
            description,
        })




        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getSignleProduct = async (req, res) => {
    try {
        // console.log(req.params.id)

        const { id } = req.params
        // console.log(id)
        const product = await Product.findById(id)

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    try {
        // console.log(req.params.id)

        // const { id } = req.params

        
        // console.log(req.body)
        // console.log(id)



        const product = await Product.findByIdAndUpdate(req.body._id, req.body, 

            { new: true }
        )

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {

        const product = await Product.findByIdAndDelete(req.body._id)

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}