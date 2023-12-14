import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/service/item.service';


@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent {

  item:Item=new Item();

  constructor(private service:ItemService, private router:Router)
  {

  }
  

  save()
  {
    this.service.createItem(this.item).subscribe(
      (response)=>{
        alert('Record added');
        this.router.navigate(['items']);
      }
    );

    
  }

}
