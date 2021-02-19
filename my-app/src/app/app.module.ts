import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', redirectTo: 'category',  pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'products/:id', component: ProductsComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
