import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPaswordComponent } from './input-pasword.component';

describe('InputPaswordComponent', () => {
  let component: InputPaswordComponent;
  let fixture: ComponentFixture<InputPaswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPaswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
