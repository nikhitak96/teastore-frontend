import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


  export class FileUploadService {
    private baseUrl = 'http://localhost:9090';
  
    constructor(private http: HttpClient) { }
  
    upload(file: File): Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();
  
      formData.append('file', file);
  
      const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
        reportProgress: true,
        responseType: 'json'
      });
  
      return this.http.request(req);
    }
  
    getFiles(): Observable<any> {
      return this.http.get(`${this.baseUrl}/files`);
    }
  
    getFile(file:any):Observable<any> {
      
      let params = new HttpParams();
      params=params.set('file', file);
      return this.http.get(`${this.baseUrl}/file`,{params});
    }
}
