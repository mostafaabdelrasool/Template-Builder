/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComponentCodeService } from './component-code.service';

describe('Service: ComponentCode', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentCodeService]
    });
  });

  it('should ...', inject([ComponentCodeService], (service: ComponentCodeService) => {
    expect(service).toBeTruthy();
  }));
});
