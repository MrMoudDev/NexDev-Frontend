import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyNew } from './company-new';

describe('CompanyNew', () => {
  let component: CompanyNew;
  let fixture: ComponentFixture<CompanyNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
