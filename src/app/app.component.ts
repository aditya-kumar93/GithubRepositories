import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FetchRepoService, IUserDetails, IUserRepository } from './fetch-repo-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'GithubRepositories';
	userName: string;
	userData: IUserDetails;
	userRepositories: IUserRepository[] = [];
	maxpages: number = 1;
	isAValidUser: boolean = true;
	constructor(private fetchRepoService: FetchRepoService,
		private spinnerService: NgxSpinnerService) {

	}

	searchUserName() {

		this.spinnerService.show();
		this.fetchRepoService.getUserViaUserName(this.userName)
			.subscribe(_ => {

				var u = {
					name: _.name,
					bio: _.bio,
					avatarUrl: _.avatar_url,
					twitterHandle: _.twitter_username,
					location: _.location,
					gitUrl: _.url} as IUserDetails;

				this.userData = u;
				this.maxpages = _.public_repos > 100 ? 100 : _.public_repos;
				this.spinnerService.hide();
				this.getRepoData();
				this.setValidUserStatus(true);

			},
				err => {
					this.userData = null;
					this.userRepositories = null;
					this.setValidUserStatus(false);
					console.log('userDoesntExist');
					this.spinnerService.hide();
				});
	}

	getRepoData(page: number = 1) {
		this.spinnerService.show();
		this.userRepositories = [];
		this.fetchRepoService.getUserRepos(page)
			.subscribe(
				_ => {

					_.forEach(element => {

						var t = {
							userId: element.id,
							name: element.name,
							description: element.description,
							languages: []
						} as IUserRepository

						this.fetchRepoService.getRepoLanguages(element.languages_url).subscribe(__ => {

							t.languages = Object.keys(__);
						}, err => {

							t.languages = [];
						});
						this.userRepositories.push(t);
					});

					console.log(this.userRepositories);
					this.spinnerService.hide();
					// debugger;
				},
				err => {
					this.spinnerService.hide();
					console.log('error fetching repositories');
				}
			);
	}

	setValidUserStatus(status: boolean) {
		this.isAValidUser = status;
	}



}
