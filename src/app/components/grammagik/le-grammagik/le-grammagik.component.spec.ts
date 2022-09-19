import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeGrammagikComponent } from './le-grammagik.component';

describe('LeGrammagikComponent', () => {
  let component: LeGrammagikComponent;
  let fixture: ComponentFixture<LeGrammagikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeGrammagikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeGrammagikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
