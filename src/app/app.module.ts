import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductModule } from './product/product.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
