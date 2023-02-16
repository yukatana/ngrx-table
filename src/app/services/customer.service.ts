import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { createInitialCustomers } from '../utils/faker.util';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  static getCustomers = () => {
    //Setting customers as '[]' if localStorage returns null to avoid JSON.parse() error
    let customers: Customer[] = JSON.parse(localStorage.getItem('customers') || '[]')
    // Assigning explicit customer list through faker util on app's first interaction
    if (customers.length === 0) {
      customers = createInitialCustomers()
    }
    return customers
  }
}
