import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "../model/cart.model";
import { Category } from "../model/category.model";
import { CategoryReposity } from "../model/category.repository";
import { Product } from "../model/product.model";
import { ProductReposity } from "../model/product.repository";

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html',
    
})

export class ShopComponent {
    public selectedCategory: Category = null;
    public selectedPage = 1;
    public productPerPage = 4;


    constructor(private categoryRepository: CategoryReposity
        , private productRepository: ProductReposity
        ,private cart:Cart
        ,private router:Router) { }

    get products(): Product[] {
        let index = (this.selectedPage - 1) * this.productPerPage
        return this.productRepository
            .getProducts(this.selectedCategory)
            .slice(index, index + this.productPerPage);
    }
    get pageNumbers(): number[] {
        return Array(Math.ceil(this.productRepository
            .getProducts(this.selectedCategory).length / this.productPerPage))
            .fill(0)
            .map((a, i) => i + 1)

    }
    get categories(): Category[] {
        return this.categoryRepository.getCategories();
    }

    changeCategory(newCategory?: Category) {
        this.selectedCategory = newCategory;
    }
    changePage(p: number) {
        this.selectedPage = p;
    }
    addProductToCart(product:Product){
        this.cart.addItem(product);
        this.router.navigateByUrl('/cart');

    }
}
