import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapJsComponent } from './bootstrap-js.component';

describe('BootstrapJsComponent', () => {
  let component: BootstrapJsComponent;
  let fixture: ComponentFixture<BootstrapJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
