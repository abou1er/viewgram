import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammagikSingleComponent } from './grammagik-single.component';

describe('GrammagikSingleComponent', () => {
  let component: GrammagikSingleComponent;
  let fixture: ComponentFixture<GrammagikSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrammagikSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrammagikSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
