import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormComponent } from './customer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { createTestCustomer } from '../../utils/faker.util';
import { TestCustomer } from '../../models/customer';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from '../../modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('CustomerFormComponent', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;

  beforeEach(async () => {
    const initialState = {}

    await TestBed.configureTestingModule({
      declarations: [ CustomerFormComponent ],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule
      ],
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

  const testCustomer = createTestCustomer()
  const fillForm = (testCustomer: TestCustomer[]) => {
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
    component.createCustomerForm.patchValue({ email: '2138451' })
    fixture.detectChanges()
    expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBeTruthy()
  })

  it('should reset the form after submission', () => {
    fillForm(testCustomer)
    fixture.debugElement.nativeElement.querySelector('button').click()
    fixture.detectChanges()
    expect(component.createCustomerForm.pristine).toBeTruthy()
  })

});
