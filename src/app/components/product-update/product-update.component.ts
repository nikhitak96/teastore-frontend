import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit{

  id:any;
  product:Product=new Product();
  constructor(private service:ProductService, private activatedRoute:ActivatedRoute, private router:Router )
  {

  }
  ngOnInit(): void {
   this.id=this.activatedRoute.snapshot.params['id'];
   this.service.getProduct(this.id).subscribe(
    (response)=>{
      this.product=response;
    }
   );
  }

  update()
  {
   this.service.updateProduct(this.product,this.id).subscribe(
    (response)=>{
      alert('Product data updated!! ');
      this.router.navigate(['products']);
    }); 
  }
}
