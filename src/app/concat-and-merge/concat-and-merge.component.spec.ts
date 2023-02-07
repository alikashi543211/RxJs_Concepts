import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatAndMergeComponent } from './concat-and-merge.component';

describe('ConcatAndMergeComponent', () => {
  let component: ConcatAndMergeComponent;
  let fixture: ComponentFixture<ConcatAndMergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatAndMergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatAndMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
