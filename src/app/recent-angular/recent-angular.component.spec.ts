import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAngularComponent } from './recent-angular.component';

describe('RecentAngularComponent', () => {
  let component: RecentAngularComponent;
  let fixture: ComponentFixture<RecentAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentAngularComponent]
    });
    fixture = TestBed.createComponent(RecentAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
