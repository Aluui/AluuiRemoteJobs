import { TestBed } from '@angular/core/testing';

import { IngreedService } from './ingreed.service';

describe('IngreedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngreedService = TestBed.get(IngreedService);
    expect(service).toBeTruthy();
  });
});
