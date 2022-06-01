import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {Observable, observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url = 'http://localhost:8000/Users'; 
  constructor(private gpara:HttpClient) 
  { }




  getData(){  
   const res = this.gpara.get(this.url);
   return res
  }
  res:any;

  getdataP(data:any): Observable<any> 
  { 
    let param = new HttpParams().set("id",data.id)
    this.res = this.gpara.get(this.url,{ params:param})
    return this.res;
    console.log(this.res);
  }



addon(data:any){

  return this.gpara.post(this.url, data);
}

updatePut(data:any){
  let var1= this.url+"/"+data.id;
  return this.gpara.put(var1,data);
}
 UpdatePatch(data:any):Observable<any>
 {
  let var1= this.url+"/"+data.id;
  return this.gpara.patch(var1,data);
 }


 DeletA(data:any){
  let var1= this.url+"/"+data.id;
  return this.gpara.delete(var1);
  
}

}

