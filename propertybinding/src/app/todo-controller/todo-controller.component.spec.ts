import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoControllerComponent } from './todo-controller.component';

describe('TodoControllerComponent', () => {
  let component: TodoControllerComponent;
  let fixture: ComponentFixture<TodoControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
