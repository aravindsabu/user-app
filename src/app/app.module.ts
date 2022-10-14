import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginComponent } from './sigin/sigin.component';
import { SiginupComponent } from './siginup/siginup.component';
const appRoutes:Routes=[
  {
    path:"",component:SiginupComponent
  },
  {
    path:"ok",component:SiginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SiginComponent,
    SiginupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
