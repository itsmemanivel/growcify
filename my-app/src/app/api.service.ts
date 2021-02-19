import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  localUrl = 'https://api.growcify.com/dev/';

  constructor(private http: HttpClient) {
    
   }

   getCategory() {
    return this.http.get(this.localUrl+'category/list');
  }

  getProducts() {
    return this.http.get(this.localUrl+'/product/list/');
  }

  getProductsById(id: String){
    return this.http.get(this.localUrl+'/product/list/'+id);
  }
}
