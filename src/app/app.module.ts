import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlueColorDirective } from './directives/blueColor/blue-color.directive';

import { RouterModule } from '@angular/router';

import { InputOutputComponent } from './pages/inputOutput/inputOutput.component';
import {  BasicsComponent  } from './pages/basics/basics.component';
import { ForLoopComponent } from './pages/for-loop/for-loop.component';
import { ServiceComponent } from './pages/service/service.component';

import { UsersService } from './services/users.service';
import { HttpExService } from './services/http-ex/http-ex.service';

import { SummaryPipe } from './pipes/summary.pipe';

import { InputExComponent } from './components/input-ex/input-ex.component';
import { OutputExComponent } from './components/output-ex/output-ex.component';
import { OthersComponent } from './pages/others/others.component';
import { PanelNgContentComponent } from './components/panel-ng-content/panel-ng-content.component';
import { CustomInputDirective } from './directives/customInput/custom-input.directive';
import { SomeFormComponent } from './pages/some-form/some-form.component';
import { PrFormComponent } from './pages/pr-form/pr-form.component';
import { PrFormArrayComponent } from './pages/pr-form-array/pr-form-array.component';
import { HttpExComponent } from './pages/http-ex/http-ex.component';
import { GlobalErrorHandler } from './commons/global-error-handler';



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
    OthersComponent,
    PanelNgContentComponent,
    CustomInputDirective,
    SomeFormComponent,
    PrFormComponent,
    PrFormArrayComponent,
    HttpExComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
        {path:'',component:BasicsComponent},
        {path:'others',component:OthersComponent},
        {path:'InputOutput',component:InputOutputComponent},
        //{path:'basics',component:BasicsComponent},
        {path:'forLoop',component:ForLoopComponent},
        {path:'service',component:ServiceComponent},
        {path:'someForm',component:SomeFormComponent},
        {path:'prForm',component:PrFormComponent},
        {path:'prFormArray',component:PrFormArrayComponent},
        {path:'httpEx',component:HttpExComponent}
         //{path:'**',notFound}   // ** - all
        // "somePath/:someVar"
    ])
  ],
  providers: [
    UsersService,
    HttpExService,
    {
      provide : ErrorHandler,
      useClass : GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
