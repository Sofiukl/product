import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';



@NgModule({
  declarations: [AddProductComponent, ViewProductComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
