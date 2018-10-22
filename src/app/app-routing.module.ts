import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontenDashboardComponent } from './konten-dashboard/konten-dashboard.component';
import { KontenDataSekolahComponent } from './konten-data-sekolah/konten-data-sekolah.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: KontenDashboardComponent },
  { path: 'data-sekolah', component: KontenDataSekolahComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
	

}