import { Product } from './product';

export class ProductService{
    constructor(){

    }

    static getProducts(){
        let products = []
        for (let index = 0; index < 10; index++) {
            products.push(new Product("Name" + index, "url", "some desc"));
        }
        return products;
    }
}