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
    this.getUserData();
  }

  getUserData() {
    this.fetchRepoService.getUserViaUserName('PatrickJS')
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
