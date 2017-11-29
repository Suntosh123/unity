import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityForgotComponent } from './unity-forgot.component';

describe('UnityForgotComponent', () => {
  let component: UnityForgotComponent;
  let fixture: ComponentFixture<UnityForgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityForgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
