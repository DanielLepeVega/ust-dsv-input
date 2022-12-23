import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataIdComponent } from './data-id.component';

describe('DataIdComponent', () => {
  let component: DataIdComponent;
  let fixture: ComponentFixture<DataIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
