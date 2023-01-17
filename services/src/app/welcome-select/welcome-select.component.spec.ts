import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSelectComponent } from './welcome-select.component';

describe('WelcomeSelectComponent', () => {
  let component: WelcomeSelectComponent;
  let fixture: ComponentFixture<WelcomeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
