import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoingToTeamComponent } from './joing-to-team.component';

describe('JoingToTeamComponent', () => {
  let component: JoingToTeamComponent;
  let fixture: ComponentFixture<JoingToTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoingToTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoingToTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
