import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FetchRepoService } from './fetch-repo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(private fetchRepoService:  FetchRepoService){

	}
  title = 'GithubRepositories';
  userName: string;
  

	searchUserName(){

		this.fetchRepoService.searchUserName(this.userName);
	}
  

  
}
