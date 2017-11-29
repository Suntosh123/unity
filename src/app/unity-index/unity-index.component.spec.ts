import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityIndexComponent } from './unity-index.component';

describe('UnityIndexComponent', () => {
  let component: UnityIndexComponent;
  let fixture: ComponentFixture<UnityIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
