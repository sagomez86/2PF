import { TestBed } from '@angular/core/testing';

import { AbmUsuarioService } from './abm-usuario.service';

describe('AbmUsuarioService', () => {
  let service: AbmUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbmUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
