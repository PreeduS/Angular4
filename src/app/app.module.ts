import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlueColorDirective } from './directives/blue-color.directive';

import { RouterModule } from '@angular/router';

import { InputOutputComponent } from './pages/inputOutput/inputOutput.component';
import {  BasicsComponent  } from './pages/basics/basics.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { ServiceComponent } from './pages/service/service.component';

import { UsersService } from './services/users.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { InputExComponent } from './pages/input-ex/input-ex.component';
import { OutputExComponent } from './pages/output-ex/output-ex.component';
import { OthersComponent } from './pages/others/others.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlueColorDirective,
    InputOutputComponent,
    BasicsComponent,
    ForLoopComponent,
    ServiceComponent,
    SummaryPipe,
    InputExComponent,
    OutputExComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {path:'',component:InputOutputComponent},
        {path:'others',component:OthersComponent},
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
