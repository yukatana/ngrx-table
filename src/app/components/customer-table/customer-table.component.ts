import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../../models/customer'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as customerActions from '../../state/customers.actions';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { EditCustomerDialogComponent } from '../edit-customer-dialog/edit-customer-dialog.component';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit, AfterViewInit {
  customers$: Observable<Customer[]>
  dataSource!: MatTableDataSource<Customer>
  columns: string[] = ['id', 'firstName', 'lastName', 'status', 'email', 'phone', 'actions']

  constructor(
    private store: Store<{ customers: Customer[]}>,
    private dialog: MatDialog
  ) {
    this.customers$ = store.select('customers')
  }

  @ViewChild(MatSort) sort!: MatSort

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Customer>()
    this.customers$.subscribe((customers: Customer[]) => {
      this.dataSource.data = customers
    })
  }

  ngAfterViewInit() {
    this.sort.sort(({ id: 'firstName', start: 'asc'}) as MatSortable)
    this.dataSource.sort = this.sort
  }

  openModal = (customer: Customer) => {
    this.dialog.open(EditCustomerDialogComponent, {
      data: customer
    })
  }

  onDelete = (id: string) => {
    this.store.dispatch(customerActions.deleteCustomer({ id }))
  }
}
