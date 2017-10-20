import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrFormArrayComponent } from './pr-form-array.component';

describe('PrFormArrayComponent', () => {
  let component: PrFormArrayComponent;
  let fixture: ComponentFixture<PrFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
