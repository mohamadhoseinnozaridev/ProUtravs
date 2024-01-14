import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navbar_main_HotelComponent } from './components/page_one/header/navbar_main_Hotel/navbar_main_Hotel.component';
import { Page_mainComponent } from './page/page_main/page_main.component';
import { InformationComponent } from './components/page_one/header/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar_main_HotelComponent,
    Page_mainComponent,
    InformationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
