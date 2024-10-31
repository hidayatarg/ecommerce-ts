import express from 'express';
import { ProductController } from '../controllers/product.controller';

// create a new instance of the ProductController as it was used as class
const productController = new ProductController();

// create a new router instance
const router = express.Router();
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;