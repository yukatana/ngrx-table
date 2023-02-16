import { Component, Inject } from '@angular/core';
import { Customer } from '../../models/customer';
import * as customerActions from '../../state/customers.actions';
import { Store } from '@ngrx/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-customer-dialog',
  templateUrl: './edit-customer-dialog.component.html',
  styleUrls: ['./edit-customer-dialog.component.css']
})
export class EditCustomerDialogComponent {
  form: FormGroup

  constructor(
    private store: Store<{ customer: Customer }>,
    private dialogRef: MatDialogRef<EditCustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer
  ) {
    this.form = new FormGroup({
      id: new FormControl(data.id),
      firstName: new FormControl(data.firstName, [Validators.required]),
      lastName: new FormControl(data.lastName, [Validators.required]),
      status: new FormControl(data.status, [Validators.required]),
      email: new FormControl(data.email, [Validators.required]),
      phone: new FormControl(data.phone, [Validators.required])
    })
  }

  onEdit = (customer: Customer): void => {
    this.store.dispatch(customerActions.editCustomer({ customer }))
  }

}
