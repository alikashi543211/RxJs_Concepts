import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEventComponentComponent } from './from-event-component.component';

describe('FromEventComponentComponent', () => {
  let component: FromEventComponentComponent;
  let fixture: ComponentFixture<FromEventComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromEventComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromEventComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
