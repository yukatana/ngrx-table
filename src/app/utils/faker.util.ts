import { faker } from '@faker-js/faker';
import { Customer, TestCustomer } from '../models/customer';

// Using faker to generate array with 20 initial customer records
export const createInitialCustomers = (n: number): Customer[]  => {
  const customers: Customer[] = []
  Array.from({ length: n}).forEach(() => {
    customers.push({
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      status: 'active',
      email: faker.internet.email(),
      phone: faker.phone.number('###-###-###')
    })
  })
  return customers
}

// Generating sample customer form input for unit test
export const createTestCustomer = (): TestCustomer[] => {
  return [{
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    status: 'active',
    email: faker.internet.email(),
    phone: faker.phone.number('###-###-###')
  }]
}

export const generateGUID = () => {
  return faker.datatype.uuid()
}
