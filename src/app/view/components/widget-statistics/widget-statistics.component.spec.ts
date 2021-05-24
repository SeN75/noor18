import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatisticsComponent } from './widget-statistics.component';

describe('WidgetStatisticsComponent', () => {
  let component: WidgetStatisticsComponent;
  let fixture: ComponentFixture<WidgetStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
