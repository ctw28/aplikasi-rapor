import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuUtama = [
    {
      id: 1,
      nama_menu: 'Dashboard',
      link: 'dashboard',
      icon: 'fa fa-desktop'
    },
    {
      id_menu: '2',
      nama_menu: 'Penilaian',
      link: '',
      icon: 'fa fa-bar-chart-o',
      sub_menu:
        [
          {nama_sub: 'Pengetahuan', link: 'pengetahuan'},
          {nama_sub: 'Keterampilan', link: 'keterampilan'},
          {nama_sub: 'Sikap', link: 'sikap'}
        ]

    },
    {
      id_menu: '3',
      nama_menu: 'Data',
      link: '',
      icon: 'fa fa-tasks',
      sub_menu:
        [
          {nama_sub: 'Data Sekolah', link: 'data-sekolah'},
          {nama_sub: 'Data Jabatan', link: 'data-jabatan'},
          {nama_sub: 'Data Pegawai', link: 'data-pegawai'},
          {nama_sub: 'Data Mata Pelajaran', link: 'data-mata-pelajaran'},
          {nama_sub: 'Data Kelas', link: 'data-kelas'},
          {nama_sub: 'Data Tingkatan', link: 'data-tingkatan'},
          {nama_sub: 'Data Guru', link: 'data-guru'}
        ]
    },
    {
      id_menu: '4',
      nama_menu: 'Pengaturan',
      link: '',
      icon: 'fa fa-gear',
      sub_menu:
        [
          {nama_sub: 'Data Kelas', link: 'pengaturan/data-kelas'}
        ]
    }
  ];

  selectedMenu;

  onSelect(link): void {
    this.selectedMenu = link;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

