import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import { FlashMessagesModule } from 'angular2-flash-messages'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { ClockComponent } from './components/clock/clock.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDJaz91IwKjJg3H10jJnQ9sqR_zEvbJwBQ',
  authDomain: "proplisting-e8450.firebaseapp.com",
  databaseURL: "https://proplisting-e8450.firebaseio.com",
  storageBucket: "proplisting-e8450.appspot.com",
  messagingSenderId: "722040831656"
};

const firebaseAuthConfig = {  
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes : Routes =[
  {path:'', component:HomeComponent},
  {path:'listings', component: ListingsComponent},
  {path:'add-listing', component: AddListingComponent},
  {path:'listing/:id', component: ListingComponent},
  {path: 'clock', component: ClockComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
