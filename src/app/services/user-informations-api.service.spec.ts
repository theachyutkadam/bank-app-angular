import { TestBed } from '@angular/core/testing';

import { UserInformationsApiService } from './user-informations-api.service';

describe('UserInformationsApiService', () => {
  let service: UserInformationsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInformationsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
