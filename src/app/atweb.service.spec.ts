import { TestBed } from '@angular/core/testing';

import { AtwebService } from './atweb.service';

describe('AtwebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtwebService = TestBed.get(AtwebService);
    expect(service).toBeTruthy();
  });
});
