import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
}
