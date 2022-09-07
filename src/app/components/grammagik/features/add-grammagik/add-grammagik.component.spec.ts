import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrammagikComponent } from './add-grammagik.component';

describe('AddGrammagikComponent', () => {
  let component: AddGrammagikComponent;
  let fixture: ComponentFixture<AddGrammagikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrammagikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGrammagikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
