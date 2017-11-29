import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityLoginComponent } from './unity-login.component';

describe('UnityLoginComponent', () => {
  let component: UnityLoginComponent;
  let fixture: ComponentFixture<UnityLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
