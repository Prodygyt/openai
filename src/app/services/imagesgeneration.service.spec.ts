import { TestBed } from '@angular/core/testing';

import { ImagesgenerationService } from './imagesgeneration.service';

describe('ImagesgenerationService', () => {
  let service: ImagesgenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesgenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
