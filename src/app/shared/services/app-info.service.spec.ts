import { TestBed } from '@angular/core/testing';

import { AppInfoService } from './app-info.service';

xdescribe('AppInfoService', () => {
  let service: AppInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
