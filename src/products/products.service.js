import { Product } from './product';
import products from './products.json';

export class ProductService{

    static getProducts(searchValue){
        if(searchValue == null || searchValue.trim() == ""){
            return products;
        }
        searchValue = searchValue.toLowerCase().trim();
        let filteredProducts = products.filter(product => {
            var concatedVal = product.Description + product.Name;
            concatedVal = concatedVal.toLowerCase().trim()
            return concatedVal.includes(searchValue)
        });
        return filteredProducts;
    }

    static getProductById(id): Product{
        return products.filter(el => el.Id === id).pop();
    }
}