import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FoodEntryComponent } from './food-entry/food-entry.component';
import { FoodSearchComponent } from './food-search/food-search.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:UserLoginComponent
  },
  {
    path:"user-registration",
    component:UserRegisterComponent
  },
  {
    path:"entry",
    component:FoodEntryComponent
  },
  {
    path:"search",
    component:FoodSearchComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FoodEntryComponent,
    FoodSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
