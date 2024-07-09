import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app/app.component";
import { ButtonModule } from "primeng/button";
import { ProductComponent } from "./app/product/product.component";
import{NgxChartsModule} from '@swimlane/ngx-charts'
@NgModule({


    imports:[
        BrowserModule,
        BrowserAnimationsModule,
        ButtonModule,
        NgxChartsModule        
    ]
})
export class AppModule{

}