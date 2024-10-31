export interface ProductCreateRequest {
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
}

export interface ProductCreateRequest {
    name: string;
    description: string;
    price: number;
    images: string[];
}

export interface ProductUpdateRequest {
    name: string;
    description: string;
    price: number;
    images: string[];
}