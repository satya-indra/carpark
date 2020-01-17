import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalpropertyComponent } from './rentalproperty.component';

describe('RentalpropertyComponent', () => {
  let component: RentalpropertyComponent;
  let fixture: ComponentFixture<RentalpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
