import { Component, EventEmitter, Output, input } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  p_name!:string;
  p_imgurl!:string;
  p_price!:string;
  p_description!:string;
 @Output() AddedProduct = new EventEmitter<{pr_name:string,pr_img:string,pr_price:number,pr_desc:string}>
  Uploadimgp_img(x:any){
    
  }
  addproduct_child():any{
    
  }
}
Number