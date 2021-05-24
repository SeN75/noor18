import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStandingComponent } from './widget-standing.component';

describe('WidgetStandingComponent', () => {
  let component: WidgetStandingComponent;
  let fixture: ComponentFixture<WidgetStandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetStandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
