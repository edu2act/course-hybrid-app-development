import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongbudetailComponent } from './tongbudetail.component';

describe('TongbudetailComponent', () => {
  let component: TongbudetailComponent;
  let fixture: ComponentFixture<TongbudetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongbudetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongbudetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
