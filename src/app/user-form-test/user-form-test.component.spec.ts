import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormTestComponent } from './user-form-test.component';

describe('UserFormTestComponent', () => {
  let component: UserFormTestComponent;
  let fixture: ComponentFixture<UserFormTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
