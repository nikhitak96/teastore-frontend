import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  
  id:any;
  item:Item=new Item();
  constructor(private route:ActivatedRoute, private service:ItemService, private router:Router)
  {

  }
  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['id'];
    
    this.service.getItem(this.id).subscribe(
      (response)=>
      {
        this.item=response;
      }
    );
  }

  gotoItemList()
  {
    this.router.navigate(['items']);

  }

}
