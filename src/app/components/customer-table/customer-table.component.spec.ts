import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTableComponent } from './customer-table.component';
import { MaterialModule } from '../../modules/material/material.module';
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CustomerTableComponent', () => {
  let component: CustomerTableComponent;
  let fixture: ComponentFixture<CustomerTableComponent>;

  beforeEach(async () => {
    const initialState = {}

    await TestBed.configureTestingModule({
      declarations: [ CustomerTableComponent ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [ provideMockStore({ initialState }) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
