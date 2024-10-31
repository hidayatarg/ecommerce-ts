import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';

const productService = new ProductService();

export class ProductController {
    async getProducts(req: Request, res: Response) {
        const products = await productService.getProducts();
        res.json(products);
    }

    async getProductById(req: Request, res: Response) {
        const product = await productService.getProductById(req.params.id);
        if (!product) {
            res.status(404).send('Product not found');
            return;
        }
        res.json(product);
    }

    async createProduct(req: Request, res: Response) {
        const product = await productService.createProduct(req.body);
        res.json(product);
    }

    async updateProduct(req: Request, res: Response) {
        const product = await productService.updateProduct(req.params.id, req.body);
        res.json(product);
    }

    async deleteProduct(req: Request, res: Response) {
        await productService.deleteProduct(req.params.id);
        res.status(204).send();
    }
}
