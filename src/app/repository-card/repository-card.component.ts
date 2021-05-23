import { IUserRepository } from './../fetch-repo-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FetchRepoService } from '../fetch-repo-service.service';
@Component({
	selector: 'app-repository-card',
	templateUrl: './repository-card.component.html',
	styleUrls: ['./repository-card.component.scss']
})
export class RepositoryCardComponent implements OnInit {


	@Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();
	@Input() repos: IUserRepository[];
	@Input() maxPages: number;
	page = 1;
	pageSize = 6;
	tokens = ['javascript', 'angular', 'c#', '.NET Core', 'Ruby'];

	constructor(private fetchRepoService: FetchRepoService) {
	}

	ngOnInit(): void {



	}
	changePage(pageNumber: number) {
		this.page = pageNumber;
		this.onPageChange.emit(pageNumber);
		//this.getRepoData();
	}



}
