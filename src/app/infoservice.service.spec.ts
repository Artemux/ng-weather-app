/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InfoserviceService } from './infoservice.service';

describe('Service: Infoservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoserviceService]
    });
  });

  it('should ...', inject([InfoserviceService], (service: InfoserviceService) => {
    expect(service).toBeTruthy();
  }));
});
