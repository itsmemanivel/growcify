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
      this.categorys = data;
      console.log(this.categorys)
    })
  }

  navigate(id: string){
    this.router.navigate(['/products/'+id]);
  }

}
