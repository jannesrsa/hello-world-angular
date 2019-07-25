import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptTrainingComponent } from './javascript-training.component';

describe('JavascriptTrainingComponent', () => {
  let component: JavascriptTrainingComponent;
  let fixture: ComponentFixture<JavascriptTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
