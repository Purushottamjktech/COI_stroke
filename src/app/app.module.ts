import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { DefaultComponent } from './components/default/default.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgChartsModule } from 'ng2-charts';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Page3Component } from './components/page3/page3.component';
import { Page1Component } from './components/page1/page1.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgApexchartsModule } from 'ng-apexcharts';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DefaultComponent,
    Page3Component,
    Page1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatIconModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatCardModule, 
    MatDividerModule, 
    NgxChartsModule, 
    NgApexchartsModule,
    HttpClientModule,
    NgChartsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
