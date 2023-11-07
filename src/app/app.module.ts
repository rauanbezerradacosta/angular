import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from  '@angular/material/button';

 //páginas
import { HomeComponent } from './views/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
    
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   BrowserAnimationsModule,
   MatToolbarModule
   MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
