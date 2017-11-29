import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityUserProfileComponent } from './unity-user-profile.component';

describe('UnityUserProfileComponent', () => {
  let component: UnityUserProfileComponent;
  let fixture: ComponentFixture<UnityUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
