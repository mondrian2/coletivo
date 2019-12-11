import { TestBed } from '@angular/core/testing';

import { TrajetoService } from './trajeto.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TrajetoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule],

  }));

  it('deve ser criado', () => {
    const service: TrajetoService = TestBed.get(TrajetoService);
    expect(service).toBeTruthy();
  });
});
