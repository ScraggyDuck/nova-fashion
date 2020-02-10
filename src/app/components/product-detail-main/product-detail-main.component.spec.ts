import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailMainComponent } from './product-detail-main.component';

describe('ProductDetailMainComponent', () => {
  let component: ProductDetailMainComponent;
  let fixture: ComponentFixture<ProductDetailMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
