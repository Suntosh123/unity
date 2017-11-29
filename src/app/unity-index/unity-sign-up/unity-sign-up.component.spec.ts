import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitySignUpComponent } from './unity-sign-up.component';

describe('UnitySignUpComponent', () => {
  let component: UnitySignUpComponent;
  let fixture: ComponentFixture<UnitySignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitySignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitySignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
