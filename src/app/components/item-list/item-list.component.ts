import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  [x: string]: any;
  
    items:any[] | undefined;
  
    constructor(private service:ItemService, private router:Router)
    {
  
    }
    ngOnInit(): void {
     this.service.getItemList().subscribe(
        (response) => {
          this.items=response;
        }
      );
    }
  
    addItem()
    {
   
      this.router.navigateByUrl("add-item");
    }
  
    updateItem(id:any)
    {
      this.router.navigate(['update-item',id]);
    }
    deleteItem(id:any)
    {
      this.service.deleteItem(id).subscribe(
        (response)=>{
          alert('Record deleted!!');
          this.ngOnInit(); //no need to refresh to get updated record after delete
          
        }
      );
    }
  
    viewItem(id:any)
    {
      this.router.navigate(['view-item',id]);
    }
  }
  
