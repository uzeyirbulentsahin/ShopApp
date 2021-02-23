import {NgModule} from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RestService } from "./rest.service";
import { ProductReposity } from "./product.repository";
import { CategoryReposity } from "./category.repository";

@NgModule({
    imports:[HttpClientModule],
    providers:[RestService,ProductReposity,CategoryReposity]
})

export class ModelModule{}


