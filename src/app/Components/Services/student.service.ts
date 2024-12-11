import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  jsonServerUrl:string="http://localhost:3000/";
  constructor(private http:HttpClient) { }

  // getData(){
  //   console.log("Hello")
  //    return this.http.get("https://jsonplaceholder.typicode.com/posts")

  // }

  getAllUser():Observable<any>{
    return this.http.get(this.jsonServerUrl+"users");
  }

  postAllUser(object:any):Observable<any>{
    return this.http.post(this.jsonServerUrl+"users",object);
  }
  
  editUser(id:number):Observable<any>{
    return this.http.get(this.jsonServerUrl+"users/"+id);
  }
  updateUser(record:any):Observable<any>{
    return this.http.put(this.jsonServerUrl+"users/"+record.id,record);
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete(this.jsonServerUrl+"users/"+id);
  }
  
}
