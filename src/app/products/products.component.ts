import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
@Input() Child_item! :{pname:string,pimg:string,pprice:number,pdesc:string};

pro_name!:string
pro_imgurl!:String
pro_price!:number
pro_description!:string


//#region 

// Uploadimg(event:any){
 
//   debugger
//     const file = event.currentTarget.files[0] ; 
//     let imgtype = file.type;
//     if (file.type ==='image/jpeg' ) {
//       let reader = new FileReader();
//     reader.readAsDataURL(file)
//     reader.onload=(event:any)=>{
//       this.pro_imgurl=event.target.result
//     }
//    }
//     else{
//       alert("not correct file")
//     }
    
//   }
//#endregion

Uploadimg(event:any){
 debugger
 const file = event.currentTarget.files[0] ; 
 if (file) {
  let reader = new FileReader();
  reader.readAsDataURL(file)
  reader.onload=(event:any)=>{
    this.pro_imgurl=event.target.result
  }

this.pro_imgurl=""
}
}


addproduct(){
  
  // debugger
  // if (this.pro_imgurl =="" && this.pro_imgurl.length == 0) {
  //   this.pro_imgurl="../../assets/images/images.png"
  // }
  // this.allProducts.unshift(
  //   {
  //     pname:this.pro_name,
  //     pimg:this.pro_imgurl,
  //     pprice:this.pro_price,
  //     pdesc:this.pro_description});
  //     this.pro_imgurl="";
}

}

