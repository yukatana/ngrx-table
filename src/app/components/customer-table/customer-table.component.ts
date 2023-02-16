import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../../models/customer'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  customers$: Observable<Customer[]>
  dataSource!: MatTableDataSource<Customer>
  columns: string[] = ['id', 'firstName', 'lastName', 'status', 'email', 'phone']

  constructor(
    private store: Store<{ customers: Customer[]}>
  ) {
    this.customers$ = store.select('customers')
  }

  ngOnInit(): void {

  }

}
