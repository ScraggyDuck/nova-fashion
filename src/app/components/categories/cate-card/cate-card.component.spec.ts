import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateCardComponent } from './cate-card.component';

describe('CateCardComponent', () => {
  let component: CateCardComponent;
  let fixture: ComponentFixture<CateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
