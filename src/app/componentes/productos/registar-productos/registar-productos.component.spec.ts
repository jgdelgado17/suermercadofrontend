import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarProductosComponent } from './registar-productos.component';

describe('RegistarProductosComponent', () => {
  let component: RegistarProductosComponent;
  let fixture: ComponentFixture<RegistarProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistarProductosComponent]
    });
    fixture = TestBed.createComponent(RegistarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
