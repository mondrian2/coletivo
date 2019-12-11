import { TestBed } from '@angular/core/testing';

import { LotacaoService } from './lotacao.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LotacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule],

  }));

  it('deve ser criado', () => {
    const service: LotacaoService = TestBed.get(LotacaoService);
    expect(service).toBeTruthy();
  });
});
