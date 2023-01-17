import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieplayerComponent } from './movieplayer.component';

describe('MovieplayerComponent', () => {
  let component: MovieplayerComponent;
  let fixture: ComponentFixture<MovieplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
