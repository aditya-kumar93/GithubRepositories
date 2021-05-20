import { Component, OnInit } from '@angular/core';
import { FetchRepoService } from '../fetch-repo-service.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  userData: any;
  constructor(private fetchRepoService: FetchRepoService) {
  }

  ngOnInit(): void {

	  this.fetchRepoService.userName$.subscribe(_ => {

		  this.getUserData();
	  });
  }

  getUserData() {
    this.fetchRepoService.getUserViaUserName()
    .subscribe(
      _ => {
        this.userData = _;
      },
      err => {
        console.log('something went terribly wrong');
      }
    );
  }
}
