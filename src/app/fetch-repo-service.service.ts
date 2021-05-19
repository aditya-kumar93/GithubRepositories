import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const getuserUrl = "https://api.github.com/users/";
@Injectable({
  providedIn: 'root'
})
export class FetchRepoService {

  private userName : string;

  constructor(private http: HttpClient) {
   }

  getUserViaUserName(username: string): Observable<any>{

    this.userName = username;
    return this.http.get(getuserUrl+'/'+username);
  }

  getUserRepos(){
    return this.http.get(getuserUrl+this.userName+'/repos');
  }
}
