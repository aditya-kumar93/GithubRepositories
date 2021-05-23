import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchRepoService } from './fetch-repo-service.service';
import { RepositoryCardComponent } from './repository-card/repository-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserCardComponent } from './user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryCardComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
	NgxSpinnerModule,
	FormsModule,
	BrowserAnimationsModule
  ],
  providers: [FetchRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
