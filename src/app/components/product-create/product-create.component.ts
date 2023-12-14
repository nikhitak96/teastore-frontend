
import { ProductService } from 'src/app/service/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product:Product=new Product();

  constructor(private service:ProductService, private router:Router)
  {

  }
  

 
 
  files:any;
  target:any;
  handleFileInput(event: Event) {
    this.target = event.target as HTMLInputElement;
    this.files = this.target.files as FileList;
    //console.log(this.files);
    
  }

  save(data:any)
  {
    const formData: FormData = new FormData();
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("name", data.name);
    formData.append("quantity", data.quantity);
    formData.append("image", this.files[0]);


    this.service.createProduct(formData).subscribe(
      (response)=>{
        alert('Record added');
        this.router.navigate(['products']);
      }
    );

    
  }

}
