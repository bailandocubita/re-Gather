import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketListPageComponent } from './bucket-list-page.component';

describe('BucketListPageComponent', () => {
  let component: BucketListPageComponent;
  let fixture: ComponentFixture<BucketListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucketListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
