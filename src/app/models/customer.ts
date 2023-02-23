export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  status: 'active'| 'pending' | 'inactive';
  email: string;
  phone?: string;
}

export interface TestCustomer {
  firstName: string;
  lastName: string;
  status: 'active'| 'pending' | 'inactive';
  email: string;
  phone?: string;
}
