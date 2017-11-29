import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityHomeComponent } from './unity-home.component';

describe('UnityHomeComponent', () => {
  let component: UnityHomeComponent;
  let fixture: ComponentFixture<UnityHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
