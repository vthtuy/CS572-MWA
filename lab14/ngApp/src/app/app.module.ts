import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './service/data.service';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [

    HttpClientModule,
    BrowserModule,

    RouterModule.forRoot([
     // {path : '', component : AppComponent},
      {path : 'users', loadChildren: () => import ('./users/user.module').then(m => m.UserModule) }
    ])
  ],
  providers: [
    DataService, HttpClientModule, HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
