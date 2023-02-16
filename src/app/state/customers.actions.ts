import { createAction, props } from '@ngrx/store';
import { Customer } from '../models/customer';

// Creating customer actions for state modification
export const createCustomer = createAction(
  '[Customer Form] Create customer',
  props<{ customer: Customer }>()
)

export const editCustomer = createAction(
  '[Customer Modal] Edit customer',
  props<{ customer: Customer }>()
)

export const deleteCustomer = createAction(
  '[Customer Table] Delete customer',
  props<{ id: string }>()
)
