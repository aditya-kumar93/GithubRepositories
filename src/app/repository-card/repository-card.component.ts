import { Component, OnInit } from '@angular/core';
import { FetchRepoService } from '../fetch-repo-service.service';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss']
})
export class RepositoryCardComponent implements OnInit {

  repos: any;
  page = 1;
  pageSize = 6;
  tokens = ['javascript', 'angular','c#','.NET Core', 'Ruby'];
  reposs = [1,2,3,4,5,6];
  repos2 = [{key1: 1},{key1: 2},{ key1:3}]
  constructor(private fetchRepoService: FetchRepoService) {
  }

  ngOnInit(): void {
	  
	this.fetchRepoService.userName$.subscribe(_ =>{

		debugger;
		this.getRepoData();
	});
  }
  changePage(pageNumber: number){
	  this.page = pageNumber;
	  this.getRepoData();
  }

  getRepoData() {
    this.fetchRepoService.getUserRepos(this.page)
    .subscribe(
      _ => {
       this.repos = _;
	  // debugger;
      },
      err => {
        console.log('something went terribly wrong');
      }
    );
  }

}
