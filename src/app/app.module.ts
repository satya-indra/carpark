import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RentalpropertyComponent } from './rentalproperty/rentalproperty.component';
import { MybookinglistComponent } from './mybookinglist/mybookinglist.component';
import { MyrentallistComponent } from './myrentallist/myrentallist.component';
import { MyprofileComponent } from './myprofile/myprofile.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RentalpropertyComponent,
    MybookinglistComponent,
    MyrentallistComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:"", component:HomeComponent},
      {path:"login", component:LoginComponent},
      {path:"register", component:RegisterComponent},
      {path:"rentalproperty", component:RentalpropertyComponent},
      {path:"mybookinglist", component:MybookinglistComponent},
      {path:"myrentallist", component:MyrentallistComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
