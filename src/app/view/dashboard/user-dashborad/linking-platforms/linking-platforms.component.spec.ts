import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkingPlatformsComponent } from './linking-platforms.component';

describe('LinkingPlatformsComponent', () => {
  let component: LinkingPlatformsComponent;
  let fixture: ComponentFixture<LinkingPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkingPlatformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkingPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
