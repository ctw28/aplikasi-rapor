import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontenDashboardComponent } from './konten-dashboard.component';

describe('KontenDashboardComponent', () => {
  let component: KontenDashboardComponent;
  let fixture: ComponentFixture<KontenDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontenDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
