import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlueColorDirective } from './directives/blue-color.directive';

import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import {  BasicsComponent  } from './pages/basics/basics.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { ServiceComponent } from './pages/service/service.component';

import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlueColorDirective,
    HomeComponent,
    BasicsComponent,
    ForLoopComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {path:'',component:HomeComponent},
        {path:'basics',component:BasicsComponent},
        {path:'for-loop',component:ForLoopComponent},
        {path:'service',component:ServiceComponent}
         //{path:'**',notFound}   // ** - all
    ])
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
