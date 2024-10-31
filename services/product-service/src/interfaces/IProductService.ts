import { Product, ProductCreateRequest, ProductUpdateRequest } from "../models/product.model";

export interface IProductService {
    getProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product | null>;
    createProduct(data: ProductCreateRequest): Promise<Product>;
    updateProduct(id: string, data: ProductUpdateRequest): Promise<Product>;
    deleteProduct(id: string): Promise<void>;
}