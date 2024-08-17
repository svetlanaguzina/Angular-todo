import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoWorkComponent } from './to-do-work.component';

describe('ToDoWorkComponent', () => {
  let component: ToDoWorkComponent;
  let fixture: ComponentFixture<ToDoWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
