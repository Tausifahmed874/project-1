import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getSignleProduct, updateProduct } from '../controllers/productControllers.js';


const router = express.Router();


router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/:id', getSignleProduct);
router.patch('/', updateProduct);
router.delete('/', deleteProduct);


export default router





// CRUD
// create read update delete
// post get put,patch delete