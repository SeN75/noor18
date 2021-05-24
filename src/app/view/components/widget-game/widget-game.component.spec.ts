import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGameComponent } from './widget-game.component';

describe('WidgetGameComponent', () => {
  let component: WidgetGameComponent;
  let fixture: ComponentFixture<WidgetGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
