import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetoComponent } from './trajeto.component';

describe('TrajetoComponent', () => {
  let component: TrajetoComponent;
  let fixture: ComponentFixture<TrajetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
