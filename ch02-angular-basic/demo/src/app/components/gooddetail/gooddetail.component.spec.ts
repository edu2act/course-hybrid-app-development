import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooddetailComponent } from './gooddetail.component';

describe('GooddetailComponent', () => {
  let component: GooddetailComponent;
  let fixture: ComponentFixture<GooddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
