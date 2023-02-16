import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Customer } from '../../models/customer';
import { generateGUID } from '../../utils/faker.util';
import * as customerActions from '../../state/customers.actions';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  createCustomerForm: FormGroup
  statuses: string[] = ['active', 'pending', 'inactive']

  constructor(
    private store: Store<{ customer: Customer }>,
  ) {
    const emailRegex = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-]+)(\\.[a-zA-Z]{2,5}){1,2}$'
    const statusRegex = '\\b(active|pending|inactive)\\b'
    const phoneNumberRegex = '^\\s*\\+?\\s*([0-9][\\s-]*){9,}$'
    this.createCustomerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      status: new FormControl('active', [Validators.required, Validators.pattern(statusRegex)]),
      email: new FormControl('', [Validators.required, Validators.pattern(emailRegex)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(phoneNumberRegex)])
    })
  }

  onCreate = () => {
    const customer: Customer = {
      id: generateGUID(),
      ...this.createCustomerForm.value
    }
    this.store.dispatch(customerActions.createCustomer({ customer }))
    this.createCustomerForm.reset()
  }

}
