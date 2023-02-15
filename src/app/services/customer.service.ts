import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { customerList } from '../data/customers.data';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  static getCustomers = () => {
    //Setting customers as '[]' if localStorage returns null to avoid JSON.parse() error
    let customers: Customer[] = JSON.parse(localStorage.getItem('customers') || '[]')
    // Assigning explicit customer list on app's first interaction
    if (customers === []) {
      customers = customerList
    }
    return customers
  }
}
