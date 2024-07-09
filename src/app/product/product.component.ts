import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../product.service';
import { log } from 'console';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditProductComponent } from "./add-edit-product/add-edit-product.component";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [TableModule, Button, DialogModule, AddEditProductComponent]
})
export class ProductComponent implements OnInit {
  products:Product[]=[];
  displayAddModal=false;
  isSlectedData:any=null;
  constructor(private prodService:ProductService){

  }
  ngOnInit(): void {
    this.getProducts();
  }
getProducts(){
this.prodService.getData().subscribe((res)=>{
  this.products=res;
  console.log(this.products);
})

}
// edit functionality
// recived data 
reciveddata(Newdata: any) {
  const existingItemIndex = this.products.findIndex(item => item.id === Newdata.id);
  if (existingItemIndex >= 0) {
    Object.assign(this.products[existingItemIndex], Newdata);
  } else {
    this.products.unshift(Newdata);
  }

}
showeditProduct(product:Product){
  this.displayAddModal=true;
this.isSlectedData=product;
}
showAddModal(){
this.displayAddModal=true;
this.isSlectedData=null;
// this.getProducts();
}
hideAddModal(isClosed:boolean){
this.displayAddModal=!isClosed
}
}
