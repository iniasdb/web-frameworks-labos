import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomBoundariesComponent } from './random-boundaries.component';

describe('RandomBoundariesComponent', () => {
  let component: RandomBoundariesComponent;
  let fixture: ComponentFixture<RandomBoundariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomBoundariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomBoundariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
