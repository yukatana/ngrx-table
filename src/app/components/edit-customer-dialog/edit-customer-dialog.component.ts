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
  editCustomerForm: FormGroup
  statuses: string[] = ['active', 'pending', 'inactive']

  constructor(
    private store: Store<{ customer: Customer }>,
    private dialogRef: MatDialogRef<EditCustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer
  ) {
    const emailRegex = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-]+)(\\.[a-zA-Z]{2,5}){1,2}$'
    const statusRegex = '\\b(active|pending|inactive)\\b'
    const phoneNumberRegex = '^\\s*\\+?\\s*([0-9][\\s-]*){9,}$'
    this.editCustomerForm = new FormGroup({
      id: new FormControl({ value: data.id, disabled: true}),
      firstName: new FormControl(data.firstName, [Validators.required]),
      lastName: new FormControl(data.lastName, [Validators.required]),
      status: new FormControl(data.status, [Validators.required, Validators.pattern(statusRegex)]),
      email: new FormControl(data.email, [Validators.required, Validators.pattern(emailRegex)]),
      phone: new FormControl(data.phone, [Validators.minLength(6), Validators.pattern(phoneNumberRegex)])
    })
  }

  onEdit = () => {
    const customer: Customer = this.editCustomerForm.getRawValue()
    this.store.dispatch(customerActions.editCustomer({ customer }))
    this.dialogRef.close()
  }

}
