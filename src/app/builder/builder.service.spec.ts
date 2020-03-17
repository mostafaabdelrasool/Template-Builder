/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuilderService } from './builder.service';

describe('Service: Builder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuilderService]
    });
  });

  it('should ...', inject([BuilderService], (service: BuilderService) => {
    expect(service).toBeTruthy();
  }));
});
