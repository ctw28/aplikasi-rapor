import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { KontenDashboardComponent } from './konten-dashboard/konten-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { KontenDataSekolahComponent } from './konten-data-sekolah/konten-data-sekolah.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    KontenDashboardComponent,
    KontenDataSekolahComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
