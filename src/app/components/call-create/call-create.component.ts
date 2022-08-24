import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-call-create',
  templateUrl: './call-create.component.html',
  styleUrls: ['./call-create.component.css']
})
export class CallCreateComponent implements OnInit {

  priority:     FormControl = new FormControl(null, [Validators.required])
  status:       FormControl = new FormControl(null, [Validators.required])
  title:        FormControl = new FormControl(null, [Validators.required])
  description:  FormControl = new FormControl(null, [Validators.required])
  technician:   FormControl = new FormControl(null, [Validators.required])
  client:       FormControl = new FormControl(null, [Validators.required])

  constructor() { }

  ngOnInit(): void {

  }



validFields(): boolean{
  return this.priority.valid && this.status.valid &&
  this.title.valid && this.description.valid &&
  this.technician.valid &&  this.client.valid
}
 
}