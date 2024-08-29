import { TestBed } from '@angular/core/testing';

import { TokenAutenticacionService } from './token-autenticacion.service';

describe('TokenAutenticacionService', () => {
  let service: TokenAutenticacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenAutenticacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
