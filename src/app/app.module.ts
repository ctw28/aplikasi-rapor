import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { KontenDataSekolahComponent } from './component/data-sekolah/konten-data-sekolah.component';
import { MataPelajaranComponent } from './component/mata-pelajaran/mata-pelajaran.component';
import { TahunAjarComponent } from './component/tahun-ajar/tahun-ajar.component';
import { KelasTingkatanComponent } from './component/kelas-tingkatan/kelas-tingkatan.component';
import { KelasPembagianComponent } from './component/kelas-pembagian/kelas-pembagian.component';
import { KelasMasterComponent } from './component/kelas-master/kelas-master.component';
import { PenilaianPengetahuanComponent } from './component/penilaian-pengetahuan/penilaian-pengetahuan.component';
import  { DashboardComponent } from './component/dashboard/dashboard.component';
import { PenilaianKeterampilanComponent } from './component/penilaian-keterampilan/penilaian-keterampilan.component';
import { PenilaianSikapComponent } from './component/penilaian-sikap/penilaian-sikap.component';
import { PegawaiMasterComponent } from './component/pegawai-master/pegawai-master.component';
import { PegawaiJabatanComponent } from './component/pegawai-jabatan/pegawai-jabatan.component';
import { PengaturanKelasComponent } from './component/pengaturan/pengaturan-kelas/pengaturan-kelas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    KontenDataSekolahComponent,
    MataPelajaranComponent,
    TahunAjarComponent,
    KelasTingkatanComponent,
    KelasPembagianComponent,
    KelasMasterComponent,
    PenilaianPengetahuanComponent,
    PenilaianKeterampilanComponent,
    PenilaianSikapComponent,
    PegawaiMasterComponent,
    PegawaiJabatanComponent,
    PengaturanKelasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
