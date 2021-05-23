import { Component, Input, OnInit } from '@angular/core';
import { FetchRepoService, IUserDetails } from '../fetch-repo-service.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

	@Input() userData: IUserDetails;
  constructor(private fetchRepoService: FetchRepoService) {
  }

  ngOnInit(): void {
	 
  }

}
