import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseComponentComponent } from './promise-component.component';

describe('PromiseComponentComponent', () => {
  let component: PromiseComponentComponent;
  let fixture: ComponentFixture<PromiseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
