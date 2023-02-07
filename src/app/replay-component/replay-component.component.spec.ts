import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayComponentComponent } from './replay-component.component';

describe('ReplayComponentComponent', () => {
  let component: ReplayComponentComponent;
  let fixture: ComponentFixture<ReplayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplayComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
