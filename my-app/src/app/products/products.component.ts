import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../api.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  id:any;
  products:any =[];
  noProducts: boolean = false;
  constructor(private route: ActivatedRoute, private api: ApiService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.api.getProductsById(this.id).subscribe(data =>{
        this.products = data;
        console.log(this.products.length);
        if(this.products.length == 0){
          this.noProducts = true;
        } else {
          this.noProducts = false;
        }
      });      
  });
  }

}
