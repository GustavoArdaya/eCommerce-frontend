import { TestBed } from '@angular/core/testing';

import { CommerceFormService } from './commerce-form.service';

describe('CommerceFormService', () => {
  let service: CommerceFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommerceFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
