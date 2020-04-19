import { TestBed } from '@angular/core/testing';

import { MygamesService } from './mygames.service';

describe('MygamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MygamesService = TestBed.get(MygamesService);
    expect(service).toBeTruthy();
  });
});
