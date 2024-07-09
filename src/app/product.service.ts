import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
urs:string="https://fakestoreapi.com/products?sort=desc"
  constructor(private http:HttpClient) { }
  getData():Observable<Product[]>{
    return this.http.get<Product[]>(this.urs);

  }
  AddEditproduct(postData:any,selectedData:any){
    if(!selectedData){
      return this.http.post('https://fakestoreapi.com/products',postData)
    }
    else{
      return this.http.put(`https://fakestoreapi.com/products/${selectedData.id}`,postData)

    }
  }
}
