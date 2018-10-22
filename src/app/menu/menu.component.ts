import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuUtama = [
  	{
  		id: 1 , 
  		nama_menu : 'Dashboard', 
  		icon : 'fa fa-desktop'
	},
  	{
		id_menu: "2",
		nama_menu: "Penilaian",
		icon : 'fa fa-bar-chart-o',
		sub_menu: 
		[
			{nama_sub: "Pengetahuan", link : 'pengetahuan'},
			{nama_sub: "Keterampilan", link : 'keterampilan'},
			{nama_sub: "Sikap", link : 'sikap'}
		]

  	},
  	{
		id_menu: "3",
		nama_menu: "Data",
		icon : 'fa fa-tasks',
		sub_menu: 
		[
			{nama_sub: "Data Sekolah", link : 'data-sekolah'},
			{nama_sub: "Data Kelas", link : 'data-kelas'},
			{nama_sub: "Data Guru", link : 'data-guru'}
		]

  	}
  ];

  selectedMenu;

  onSelect(link) : void{
  	this.selectedMenu = link;
  }

  constructor() { }

  ngOnInit() {
  }

}

http://localhost/web_balai/data/rest_menu