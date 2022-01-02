import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMobileNotificationComponent } from './concat-mobile-notification.component';

describe('ConcatMobileNotificationComponent', () => {
  let component: ConcatMobileNotificationComponent;
  let fixture: ComponentFixture<ConcatMobileNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatMobileNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatMobileNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
