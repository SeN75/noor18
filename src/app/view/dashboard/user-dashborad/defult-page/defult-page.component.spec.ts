import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefultPageComponent } from './defult-page.component';

describe('DefultPageComponent', () => {
  let component: DefultPageComponent;
  let fixture: ComponentFixture<DefultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefultPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
