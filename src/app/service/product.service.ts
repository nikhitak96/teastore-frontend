import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl="http://localhost:9090/";
  
  constructor(private http:HttpClient) { }

  getProductList():Observable<any>
  {
    return this.http.get(this.baseUrl+"products")
  }


  getProduct(id:any):Observable<any>
  {
    return this.http.get(this.baseUrl+"product/"+id);
  }


  createProduct(prd:FormData):Observable<any>
  {
    console.log(prd)
    return this.http.post(this.baseUrl+"product",prd);
  } 

  updateProduct(prd:Object,id:any):Observable<any>
  {
    return this.http.put(this.baseUrl+"product/"+id,prd);
  } 

  deleteProduct(id:any):Observable<any>
  {
    return this.http.delete(this.baseUrl+"product/"+id);
  }

  imageByName(name:any):Observable<any>
  {
    return this.http.get('http://localhost:9090/files/'+name);
  }
}
