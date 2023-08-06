import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  customerList: string[]

  inputForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.customerList = []
    this.inputForm = this.formBuilder.group({
        name: ['',]
    })
  }

  onSubmit() {
    const newCustomer: string = this.inputForm.get('name')!.value

    if (!newCustomer){
      return
    }

    this.customerList.push(newCustomer)
    this.inputForm.controls['name'].setValue('')
  }
}
