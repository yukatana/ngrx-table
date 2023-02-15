import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../../models/customer'

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  customers!: Customer[]
  dataSource!: MatTableDataSource<Customer>
  columns: string[] = ['id', 'firstName', 'lastName', 'status', 'email', 'phone']

  constructor() { }

  ngOnInit(): void {

  }

}
