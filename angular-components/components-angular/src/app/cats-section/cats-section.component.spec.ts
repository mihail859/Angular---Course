import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsSectionComponent } from './cats-section.component';

describe('CatsSectionComponent', () => {
  let component: CatsSectionComponent;
  let fixture: ComponentFixture<CatsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatsSectionComponent]
    });
    fixture = TestBed.createComponent(CatsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
