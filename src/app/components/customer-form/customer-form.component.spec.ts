import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormComponent } from './customer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { createInitialCustomers } from '../../utils/faker.util';
import { Customer } from '../../models/customer';
import { provideMockStore } from '@ngrx/store/testing';


describe('CustomerFormComponent', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;

  beforeEach(async () => {
    const initialState = {}

    await TestBed.configureTestingModule({
      declarations: [ CustomerFormComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [ provideMockStore({ initialState }) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const testCustomer = createInitialCustomers(1)
  const fillForm = (testCustomer: Customer[]) => {
    component.createCustomerForm.setValue({
      ...testCustomer[0]
    })
  }

  it('should mark fields as valid if input format is correct', () => {
    fillForm(testCustomer)
    fixture.detectChanges()
    expect(component.createCustomerForm.valid).toEqual(true)
  })

  it('should disable the submit button when inputs are invalid', () => {
    component.createCustomerForm.setValue({ email: '2138451'})
    fixture.detectChanges()
    expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBeTruthy()
  })

  it('should reset the form after submission', () => {
    fillForm(testCustomer)

  })

});
