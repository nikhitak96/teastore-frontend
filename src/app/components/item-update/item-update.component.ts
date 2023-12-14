import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit{

  id:any;
  item:Item=new Item();
  constructor(private service:ItemService, private activatedRoute:ActivatedRoute, private router:Router )
  {

  }
  ngOnInit(): void {
   this.id=this.activatedRoute.snapshot.params['id'];
   this.service.getItem(this.id).subscribe(
    (response)=>{
      this.item=response;
    }
   );
  }

  update()
  {
   this.service.updateItem(this.item,this.id).subscribe(
    (response)=>{
      alert('Item data updated!! ');
      this.router.navigate(['items']);
    }); 
  }
}
