import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputExComponent } from './output-ex.component';

describe('OutputExComponent', () => {
  let component: OutputExComponent;
  let fixture: ComponentFixture<OutputExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
