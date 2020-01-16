import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PropertyregisterComponent } from './propertyregister/propertyregister.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PropertyregisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:"", component:HomeComponent},
      {path:"login", component:LoginComponent},
      {path:"register", component:RegisterComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
