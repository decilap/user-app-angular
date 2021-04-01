import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, filter, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  getUsers(){
   return this.http.get("assets/data.json");
  }

  getUser(username:string){
   return this.getUsers().pipe(
      map((data:any) => {
        const {results} = data;
        return results.find((user:any) => user.login.username === username);
      })
    );
  }
}
