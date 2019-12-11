import { TestBed } from '@angular/core/testing';

import { OnibusService } from './onibus.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OnibusService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule],

  }));

  it('deve ser criado', () => {
    const service: OnibusService = TestBed.get(OnibusService);
    expect(service).toBeTruthy();
  });
});
