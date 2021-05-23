import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const getuserUrl = "https://api.github.com/users/";

export interface IUserRepository {
	userId: string,
	name: string,
	description: string,
	languages: string[]
}

export interface IUserDetails{

	name: string;
	bio: string;
	avatarUrl: string;
	twitterHandle: string,
	location: string,
	gitUrl : string
}

@Injectable({
	providedIn: 'root'
})
export class FetchRepoService {

	private userName = new BehaviorSubject<string>('');
	public readonly userName$ = this.userName.asObservable();

	private userDetails: any;

	constructor(private http: HttpClient) {
	}


	getUserViaUserName(val: string): Observable<any> {
	
		this.userName.next(val);
		return this.http.get(getuserUrl + this.userName.value);
	}

	getUserRepos(page: number): Observable<any> {
		
		return this.http.get(getuserUrl + this.userName.value + '/repos?per_page=6&page='+page);
		
	}

	getRepoLanguages(path: string): Observable<any>{

		return this.http.get(path);
	}
}
