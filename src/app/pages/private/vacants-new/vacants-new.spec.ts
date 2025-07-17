import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantsNew } from './vacants-new';

describe('VacantsNew', () => {
  let component: VacantsNew;
  let fixture: ComponentFixture<VacantsNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacantsNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacantsNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
