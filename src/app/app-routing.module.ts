import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {KontenDataSekolahComponent} from './component/data-sekolah/konten-data-sekolah.component';
import {KelasMasterComponent} from './component/kelas-master/kelas-master.component';
import {PegawaiMasterComponent} from './component/pegawai-master/pegawai-master.component';
import {PegawaiJabatanComponent} from './component/pegawai-jabatan/pegawai-jabatan.component';
import {MataPelajaranComponent} from './component/mata-pelajaran/mata-pelajaran.component';
import {PengaturanKelasComponent} from './component/pengaturan/pengaturan-kelas/pengaturan-kelas.component';
import {KelasTingkatanComponent} from './component/kelas-tingkatan/kelas-tingkatan.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'data-sekolah', component: KontenDataSekolahComponent},
  {path: 'data-pegawai', component: PegawaiMasterComponent},
  {path: 'data-jabatan', component: PegawaiJabatanComponent},
  {path: 'data-kelas', component: KelasMasterComponent},
  {path: 'data-tingkatan', component: KelasTingkatanComponent},
  {path: 'data-mata-pelajaran', component: MataPelajaranComponent},
  {path: 'pengaturan/data-kelas', component: PengaturanKelasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
