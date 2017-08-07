import { TestBed, inject } from '@angular/core/testing';

import { CharactorListService } from './charactor-list.service';

describe('CharactorListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharactorListService]
    });
  });

  it('should be created', inject([CharactorListService], (service: CharactorListService) => {
    expect(service).toBeTruthy();
  }));
});
