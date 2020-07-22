import { TestBed } from '@angular/core/testing';

import { WindowWrapperService } from './window-wrapper.service';

xdescribe('WindowWrapperService', () => {
  let service: WindowWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
