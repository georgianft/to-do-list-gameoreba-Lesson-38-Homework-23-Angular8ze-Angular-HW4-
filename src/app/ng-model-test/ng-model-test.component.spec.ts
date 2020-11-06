import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelTestComponent } from './ng-model-test.component';

describe('NgModelTestComponent', () => {
  let component: NgModelTestComponent;
  let fixture: ComponentFixture<NgModelTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModelTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
