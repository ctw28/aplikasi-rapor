import { TestBed } from '@angular/core/testing';

import { KontenDashboardService } from './konten-dashboard.service';

describe('KontenDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KontenDashboardService = TestBed.get(KontenDashboardService);
    expect(service).toBeTruthy();
  });
});
