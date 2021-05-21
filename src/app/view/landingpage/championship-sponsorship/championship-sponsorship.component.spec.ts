import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipSponsorshipComponent } from './championship-sponsorship.component';

describe('ChampionshipSponsorshipComponent', () => {
  let component: ChampionshipSponsorshipComponent;
  let fixture: ComponentFixture<ChampionshipSponsorshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionshipSponsorshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipSponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
