
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
[x: string]: any;

  products:any[] | undefined;

  constructor(private service:ProductService, private router:Router)
  {

  }
  ngOnInit(): void {
   this.service.getProductList().subscribe(
      (response) => {
        this.products=response;
      }
    );
   
  }
  geturl(filename:any)
  {
   let imageurl:any;
    this.service.imageByName(filename).subscribe(
      (response) => {
        imageurl = response;
      }
    );
    return imageurl;
  }

  addProduct()
  {
 
    this.router.navigateByUrl("add-product");
  }

  updateProduct(id:any)
  {
    this.router.navigate(['update-product',id]);
  }
  deleteProduct(id:any)
  {
    this.service.deleteProduct(id).subscribe(
      (response)=>{
        alert('Record deleted!!');
        this.ngOnInit(); //no need to refresh to get updated record after delete
        
      }
    );
  }

  viewProduct(id:any)
  {
    this.router.navigate(['view-product',id]);
  }
}
