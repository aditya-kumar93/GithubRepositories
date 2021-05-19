import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchRepoService } from './fetch-repo-service.service';
import { RepositoryCardComponent } from './repository-card/repository-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserCardComponent } from './user-card/user-card.component';

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
    NgbModule
  ],
  providers: [FetchRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
