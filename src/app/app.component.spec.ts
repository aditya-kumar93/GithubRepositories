import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxSpinnerService } from 'ngx-spinner';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { FetchRepoService } from './fetch-repo-service.service';
import {delay} from 'rxjs/operators';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
        FetchRepoService,
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

  it('should return user git details',fakeAsync(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    let component = fixture.componentInstance;
    component.userName = 'aditya-kr';
    let fetchRepoService = fixture.debugElement.componentInstance.injector.get(FetchRepoService);
    let stub = spyOn(fetchRepoService,"getUserViaUserName").and.callFake(() =>{
      return of({name: 'Tony Stark',
        bio: 'iron man',
        avatarUrl: 'you already know it',
        twitterHandle: 'i_heart_ironman',
        location: 'New York',
        gitUrl : 'private repo baby'}).pipe(delay(300));
    });
    component.searchUserName();
    tick(300);

    expect(component.userData).toEqual({name: 'Tony Stark',
    bio: 'iron man',
    avatarUrl: 'you already know it',
    twitterHandle: 'i_heart_ironman',
    location: 'New York',
    gitUrl : 'private repo baby'});

    expect(component.isAValidUser).toEqual(true);


  }))
});
