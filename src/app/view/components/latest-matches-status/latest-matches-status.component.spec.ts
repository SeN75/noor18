import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestMatchesStatusComponent } from './latest-matches-status.component';

describe('LatestMatchesStatusComponent', () => {
  let component: LatestMatchesStatusComponent;
  let fixture: ComponentFixture<LatestMatchesStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestMatchesStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestMatchesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
