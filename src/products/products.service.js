import { Product } from './product';
import products from './products.json';

export class ProductService{

    static getProducts(){
        return products;
    }

    static getProductById(id): Product{
        return products.filter(el => el.Id === id).pop();
    }
}