import { faker } from '@faker-js/faker';
import { Customer } from '../models/customer';

// Using faker to generate array with 20 initial customer records
export const createInitialCustomers = ()  => {
  const customers: Customer[] = []
  Array.from({ length: 20}).forEach(() => {
    customers.push({
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      status: 'active',
      email: faker.internet.email(),
      phone: faker.phone.number()
    })
  })
  return customers
}
