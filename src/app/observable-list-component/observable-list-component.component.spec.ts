import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableListComponentComponent } from './observable-list-component.component';

describe('ObservableListComponentComponent', () => {
  let component: ObservableListComponentComponent;
  let fixture: ComponentFixture<ObservableListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
