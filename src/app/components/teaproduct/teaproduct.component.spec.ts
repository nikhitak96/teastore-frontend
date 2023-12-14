import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaproductComponent } from './teaproduct.component';

describe('TeaproductComponent', () => {
  let component: TeaproductComponent;
  let fixture: ComponentFixture<TeaproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeaproductComponent]
    });
    fixture = TestBed.createComponent(TeaproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
