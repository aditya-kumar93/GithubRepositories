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
    this.getRepoData();
  }

  getRepoData() {
    this.fetchRepoService.getUserRepos()
    .subscribe(
      _ => {
       this.repos = _;
      },
      err => {
        console.log('something went terribly wrong');
      }
    );
  }

}
