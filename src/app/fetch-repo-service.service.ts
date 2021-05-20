import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const getuserUrl = "https://api.github.com/users/";

@Injectable({
	providedIn: 'root'
})
export class FetchRepoService {

	private userName = new BehaviorSubject<string>('');
	public readonly userName$ = this.userName.asObservable();

	private userDetails: any;

	constructor(private http: HttpClient) {
	}

	searchUserName(val: string) {

		this.userName.next(val);
		debugger;
	}

	getUserViaUserName(): any {
	
		 this.http.get(getuserUrl + this.userName.value).subscribe(_ =>{
			
			this.userDetails = _;
			this.getUserRepos(1);
		},err =>{
			this.userDetails = 'no user exists';
		});
	}

	getUserRepos(page: number): Observable<any> {
		
		return this.http.get(getuserUrl + this.userName.value + '/repos?per_page=6&page='+page);
		
	}
}
