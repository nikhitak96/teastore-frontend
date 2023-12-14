import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl="http://localhost:9090/";
  
  constructor(private http:HttpClient) { }

  getItemList():Observable<any>
  {
    return this.http.get(this.baseUrl+"items")
  }


  getItem(id:any):Observable<any>
  {
    return this.http.get(this.baseUrl+"item/"+id);
  }

  createItem(itm:Object):Observable<any>
  {
    return this.http.post(this.baseUrl+"item",itm);
  } 

  updateItem(itm:Object,id:any):Observable<any>
  {
    return this.http.put(this.baseUrl+"item/"+id,itm);
  } 

  deleteItem(id:any):Observable<any>
  {
    return this.http.delete(this.baseUrl+"item/"+id);
  }
}
