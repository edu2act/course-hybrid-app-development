import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongbuComponent } from './tongbu.component';

describe('TongbuComponent', () => {
  let component: TongbuComponent;
  let fixture: ComponentFixture<TongbuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongbuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
