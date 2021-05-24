import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Observer, of } from 'rxjs';
import { AppComponent } from './app.component';
import { FetchRepoService, IUserRepository } from './fetch-repo-service.service';
import {delay} from 'rxjs/operators';
import { HttpClientTestingModule } from '@angular/common/http/testing';

let mockData = {
	name: 'Tony Stark',
	bio: 'iron man',
	avatarUrl: 'you already know it',
	twitterHandle: 'i_heart_ironman',
	location: 'New York',
	gitUrl: 'private repo baby'
};

class MockContactService {

	getUserViaUserName(username) {
		return Observable.create((observer: Observer<any>) => {
			observer.next(mockData);
		});
	}

	getUserRepos(){
		return Observable.create((observer: Observer<any[]>)=>{
			observer.next([{repo: 'repo1'},{repo:'repo2'}]);
		});
	}

	getRepoLanguages(){
		return Observable.create((observer: Observer<any[]>) => {
			observer.next(['angular','java','python']);
		});
	}
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule  
      ],
      declarations: [
        AppComponent
      ],
      providers: [
		  { provide: FetchRepoService, useClass: MockContactService },
        NgxSpinnerService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'GithubRepositories'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('GithubRepositories');
  });

  it('should check if service method for getting user details has been trigerred ',fakeAsync(()=>{
    let fixture = TestBed.createComponent(AppComponent);
	let component = fixture.debugElement.componentInstance;
	let element = fixture.debugElement.nativeElement;

	  spyOn(component.fetchRepoService, 'getUserViaUserName').and.callThrough();
	  component.searchUserName();
	  flush();
	  expect(component.fetchRepoService.getUserViaUserName).toHaveBeenCalled();

  }));

	it('should check if method for fetching repositories details have been trigerred', fakeAsync(() => {
		let fixture = TestBed.createComponent(AppComponent);
		let component = fixture.debugElement.componentInstance;
		let element = fixture.debugElement.nativeElement;

		spyOn(component.fetchRepoService, 'getUserRepos').and.callThrough();
		component.getRepoData();
		flush();
		expect(component.fetchRepoService.getUserRepos).toHaveBeenCalled();

	}));

});
