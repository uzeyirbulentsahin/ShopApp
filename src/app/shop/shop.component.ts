import { Component} from "@angular/core";
import { Category } from "../model/category.model";
import { CategoryReposity } from "../model/category.repository";
import { Product } from "../model/product.model";
import { ProductReposity } from "../model/product.repository";

@Component({
    selector:'shop',
    templateUrl:'shop.component.html',
    styles:[`
        .pt-100 { padding-top:100px; }
    `]
})

export class ShopComponent{
    public selectedCategory:Category=null;

    constructor(private categoryRepository:CategoryReposity
        ,private productRepository:ProductReposity){}

    get products(): Product[]{
        return this.productRepository.getProducts(this.selectedCategory);
    }
    get categories(): Category[]{
        return this.categoryRepository.getCategories();
    }

    changeCategory(newCategory?:Category){
            this.selectedCategory=newCategory;
    }
}
