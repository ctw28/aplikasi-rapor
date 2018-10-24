import { Component, OnInit } from '@angular/core';

import { KontenDashboardService } from './konten-dashboard.service';


@Component({
  selector: 'app-konten-dashboard',
  templateUrl: './konten-dashboard.component.html',
  providers: [ KontenDashboardService ],
  styleUrls: ['./konten-dashboard.component.css']
})
export class KontenDashboardComponent implements OnInit {
  
  data: string[];
  test = 'ini dashbord!';

  constructor(private kontenDashboardService: KontenDashboardService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.kontenDashboardService.getDashboard()
      .subscribe(data => this.data =data);
  }

}
