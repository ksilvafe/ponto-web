import { TestBed } from '@angular/core/testing';

import { CadastrarPjService } from './cadastro-pj.service';

describe('CadasroPjService', () => {
  let service: CadastrarPjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarPjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
