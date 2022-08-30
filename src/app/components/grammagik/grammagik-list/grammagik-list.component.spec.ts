import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammagikListComponent } from './grammagik-list.component';

describe('GrammagikListComponent', () => {
  let component: GrammagikListComponent;
  let fixture: ComponentFixture<GrammagikListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrammagikListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrammagikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
