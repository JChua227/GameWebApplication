import { TestBed } from '@angular/core/testing';

import { JumbleService } from './jumble.service';

describe('JumbleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JumbleService = TestBed.get(JumbleService);
    expect(service).toBeTruthy();
  });
});
