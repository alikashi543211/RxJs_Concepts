import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapTwoComponent } from './concat-map-two.component';

describe('ConcatMapTwoComponent', () => {
  let component: ConcatMapTwoComponent;
  let fixture: ComponentFixture<ConcatMapTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatMapTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatMapTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
