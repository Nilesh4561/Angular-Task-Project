import { TestBed } from '@angular/core/testing';

import { CrudOprService } from './crud-opr.service';

describe('CrudOprService', () => {
  let service: CrudOprService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudOprService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
