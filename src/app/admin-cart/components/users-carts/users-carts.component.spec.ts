import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCartsComponent } from './users-carts.component';

describe('UsersCartsComponent', () => {
  let component: UsersCartsComponent;
  let fixture: ComponentFixture<UsersCartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersCartsComponent]
    });
    fixture = TestBed.createComponent(UsersCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
