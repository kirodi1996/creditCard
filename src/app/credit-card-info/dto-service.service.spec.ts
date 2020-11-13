import { TestBed } from '@angular/core/testing';

import { DtoServiceService } from './dto-service.service';

describe('DtoServiceService', () => {
  let service: DtoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DtoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
