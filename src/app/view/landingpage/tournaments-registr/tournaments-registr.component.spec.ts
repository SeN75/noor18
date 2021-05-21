import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsRegistrComponent } from './tournaments-registr.component';

describe('TournamentsRegistrComponent', () => {
  let component: TournamentsRegistrComponent;
  let fixture: ComponentFixture<TournamentsRegistrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsRegistrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsRegistrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
