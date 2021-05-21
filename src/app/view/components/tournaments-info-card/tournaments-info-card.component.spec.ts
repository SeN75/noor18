import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsInfoCardComponent } from './tournaments-info-card.component';

describe('TournamentsInfoCardComponent', () => {
  let component: TournamentsInfoCardComponent;
  let fixture: ComponentFixture<TournamentsInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
