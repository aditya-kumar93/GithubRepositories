import { Component, Input, OnInit } from '@angular/core';
import { FetchRepoService } from '../fetch-repo-service.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() userData: any;
  constructor(private fetchRepoService: FetchRepoService) {
  }

  ngOnInit(): void {
	 
  }

}
