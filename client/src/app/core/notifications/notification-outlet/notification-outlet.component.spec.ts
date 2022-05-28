import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationOutletComponent } from './notification-outlet.component';

describe('NotificationOutletComponent', () => {
  let component: NotificationOutletComponent;
  let fixture: ComponentFixture<NotificationOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
