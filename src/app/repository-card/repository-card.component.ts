import { Component, OnInit } from '@angular/core';
import { FetchRepoService } from '../fetch-repo-service.service';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss']
})
export class RepositoryCardComponent implements OnInit {

  repos: any;
  tokens = ['javascript', 'angular','c#','.NET Core', 'Ruby'];
  reposs = [1,2,3,4,5,6];
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
        debugger;
      },
      err => {
        console.log('something went terribly wrong');
      }
    );
  }

}
