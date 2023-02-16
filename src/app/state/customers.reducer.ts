import { createReducer, on } from '@ngrx/store';
import * as customerActions from './customers.actions';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';

const initialState: Customer[] = CustomerService.getCustomers()

export const customerReducer = createReducer(
  initialState,
  on(customerActions.createCustomer, (state, { customer }) =>
    [...state, customer]
  ),
  on(customerActions.editCustomer, (state, { customer }) =>
    // Filtering previous state in order to delete previous customer object and replace (so that the previous state is not mutated)
    [...state.filter(e => e.id !== customer.id), customer]
  ),
  on(customerActions.deleteCustomer, (state, { id }) =>
    state.filter(customer => customer.id !== id)
  )
)
