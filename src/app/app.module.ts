import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { EditCustomerDialogComponent } from './components/edit-customer-dialog/edit-customer-dialog.component';

import { customerReducer } from './state/customers.reducer';
import { metaReducers } from './state/customers.metareducer';

@NgModule({
  declarations: [
    AppComponent,
    CustomerTableComponent,
    CustomerFormComponent,
    EditCustomerDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      { customers: customerReducer },
      { metaReducers }
      ),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
