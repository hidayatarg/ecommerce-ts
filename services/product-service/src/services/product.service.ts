// Product Service
// This service is responsible for managing products in the database.
//
import { IProductService } from "../interfaces/IProductService";
import { Product, ProductCreateRequest, ProductUpdateRequest } from "../models/product.model";
//import { ProductRepository } from "../repositories/product.repository";
export class ProductService implements IProductService {
    //private productRepository: ProductRepository;
    constructor() {
        //this.productRepository = new ProductRepository();
    }
    async getProducts(): Promise<Product[]> {
        return [];
    }

    async createProduct(data: ProductCreateRequest): Promise<Product> {
        // Implement database logic using SQL scripts
        const createdProduct: Product = {
            id: '1',
            name: data.name,
            description: data.description,
            price: data.price,
            images: []
        };

        return createdProduct;
    }

    async getProductById(id: string): Promise<Product | null> {
        // Implement database logic
        return null;
    }

    async updateProduct(id: string, data: ProductUpdateRequest): Promise<Product> {
        // Implement database logic
        const updatedProduct: Product = {
            id: id,
            name: data.name,
            description: data.description,
            price: data.price,
            images: []
        };

        return updatedProduct;
    }

    async deleteProduct(id: string): Promise<void> {
        // Implement database logic
    }
}   
