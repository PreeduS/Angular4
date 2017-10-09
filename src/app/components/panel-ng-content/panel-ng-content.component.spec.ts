import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNgContentComponent } from './panel-ng-content.component';

describe('PanelNgContentComponent', () => {
  let component: PanelNgContentComponent;
  let fixture: ComponentFixture<PanelNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
