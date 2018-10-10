import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShequComponent } from './shequ.component';

describe('ShequComponent', () => {
  let component: ShequComponent;
  let fixture: ComponentFixture<ShequComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShequComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShequComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
