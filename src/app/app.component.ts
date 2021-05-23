import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FetchRepoService, IUserRepository } from './fetch-repo-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'GithubRepositories';
	userName: string;
	userData: any;
	userRepositories: IUserRepository[] = [];
	maxpages : number = 1;
	isAValidUser: boolean = true;
	constructor(private fetchRepoService: FetchRepoService) {

	}

	searchUserName() {

		this.fetchRepoService.getUserViaUserName(this.userName)
		.subscribe(_ => {

			this.userData = _;
			this.maxpages = _.public_repos > 100 ? 100 : _.public_repos;
			this.getRepoData();
			this.setValidUserStatus(true);

		},
		err =>{
			this.userData = null;
			this.userRepositories = null;
			this.setValidUserStatus(false);
			console.log('userDoesntExist');
		});
	}

	getRepoData(page: number = 1) {
		this.userRepositories = [];
		this.fetchRepoService.getUserRepos(page)
			.subscribe(
				_ => {
					
					_.forEach(element => {
						
						var t = { userId :element.id,
								  name: element.name,
								  description: element.decsription,
								  languages: []} as IUserRepository

						 this.fetchRepoService.getRepoLanguages(element.languages_url).subscribe(__ =>{

							t.languages = Object.keys(__);
						},err=>{

							t.languages = [];
						});
						this.userRepositories.push(t);
					});
					
					console.log(this.userRepositories);
					// debugger;
				},
				err => {
					console.log('error fetching repositories');
				}
			);
	}

	setValidUserStatus(status: boolean){
		this.isAValidUser = status;
	}



}
