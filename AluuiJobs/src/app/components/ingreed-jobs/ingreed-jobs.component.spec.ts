import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngreedJobsComponent } from './ingreed-jobs.component';

describe('IngreedJobsComponent', () => {
  let component: IngreedJobsComponent;
  let fixture: ComponentFixture<IngreedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngreedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngreedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
