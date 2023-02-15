import { TestBed } from '@angular/core/testing';

import { UserInformationsService } from './user-informations.service';

describe('UserInformationsService', () => {
  let service: UserInformationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInformationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
