import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AngularFireModule} from 'angularfire2';

import { AppComponent } from './app.component';

import {environment} from '../environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';

import {AuthService} from './services/auth.service';
import {MeetupService} from './services/meetup.service';

import { HomePageComponent } from './home-page/home-page.component';
import {AngularFireAuth} from 'angularfire2/auth';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AddEventComponent } from './add-event/add-event.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import { MatTabsModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AllEventsComponent } from './all-events/all-events.component';
import { MyEventsComponent } from './my-events/my-events.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';


const routes: Routes = [
  { path: '', component: NavBarComponent },
  { path: 'Login', component: LoginPageComponent },
  { path: 'AddEvent', component: AddEventComponent, data: { title: 'Add Event', fileName: 'add-event.component.ts' } },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContentComponent,
    FooterComponent,
    LoginPageComponent,
    HomePageComponent,
    SearchComponent,
    AddEventComponent,
    AllEventsComponent,
    MyEventsComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [AuthService, AngularFireAuth, MeetupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
