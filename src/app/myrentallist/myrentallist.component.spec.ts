import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrentallistComponent } from './myrentallist.component';

describe('MyrentallistComponent', () => {
  let component: MyrentallistComponent;
  let fixture: ComponentFixture<MyrentallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrentallistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrentallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
