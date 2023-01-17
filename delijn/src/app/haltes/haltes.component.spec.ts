import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaltesComponent } from './haltes.component';

describe('HaltesComponent', () => {
  let component: HaltesComponent;
  let fixture: ComponentFixture<HaltesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaltesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaltesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
