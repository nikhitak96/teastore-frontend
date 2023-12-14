import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  
  id:any;
  product:Product=new Product();
  constructor(private route:ActivatedRoute, private service:ProductService, private router:Router)
  {

  }
  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['id'];
    
    this.service.getProduct(this.id).subscribe(
      (response)=>
      {
        this.product=response;
      }
    );
  }

  gotoProductList()
  {
    this.router.navigate(['products']);

  }

}
