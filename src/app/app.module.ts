import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

import { FoodSearchComponent } from './food-search/food-search.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodStartersComponent } from './food-starters/food-starters.component';
import { FoodSnacksComponent } from './food-snacks/food-snacks.component';

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
    path:"starters",
    component:FoodStartersComponent
    
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
    FoodSearchComponent,
    NavbarComponent,
    FoodStartersComponent,
    FoodSnacksComponent
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
