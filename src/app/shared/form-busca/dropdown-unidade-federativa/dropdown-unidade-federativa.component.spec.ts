import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUnidadeFederativaComponent } from './dropdown-unidade-federativa.component';

describe('DropdownUnidadeFederativaComponent', () => {
  let component: DropdownUnidadeFederativaComponent;
  let fixture: ComponentFixture<DropdownUnidadeFederativaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownUnidadeFederativaComponent]
    });
    fixture = TestBed.createComponent(DropdownUnidadeFederativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
