import { Injectable, OnInit } from "@angular/core";
import { Category } from "./Category.model";
import { RestService } from "./rest.service";

@Injectable()
export class CategoryReposity implements OnInit{
    private categories:Category[]=[];
    constructor(private restService:RestService){  
        this.restService.getCategories().subscribe(Categories => this.categories=Categories); 
    }

    ngOnInit() {
       
    }

    getCategory(id:number):Category{
        return this.categories.find(i=>i.id===id);
    }

    getCategories(): Category[]{
        return this.categories;

    }


}
