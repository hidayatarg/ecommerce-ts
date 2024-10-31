// here are product repository
// import { Product } from "../models/product.model";


// export class ProductRepository {
//     private products: Product[] = [];
//     async getProducts() {
//         return this.products;
//     }
//     async getProductById(id: string) {
//         return this.products.find(product => product.id === parseInt(id));
//     }
//     async createProduct(data) {
//         const product = {
//             id: this.products.length + 1,
//             ...data
//         };

//         this.products.push(product);
//         return product;
//     }
//     async updateProduct(id: string, data) {
//         const product = this.products.find(product => product.id === parseInt(id));
//         if (!product) {
//             return null;
//         }

//         Object.assign(product, data);

//         return product;

//     }
//     async deleteProduct(id: string) {
//         this.products = this.products.filter(product => product.id !== parseInt(id));
//     }
