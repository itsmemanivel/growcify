import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  panelOpenState = false;

  categorys: any = [];
  products: any = [];
  constructor(private api: ApiService, private router: Router){ }

  ngOnInit(): void {
    this.api.getCategory().subscribe(data =>{
      // for(var i=0; i<){

      // }
      this.categorys = data;
    })
  }

  navigate(id: string){
    this.router.navigate(['/products/'+id]);
  }

}
