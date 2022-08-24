import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class clientCreateComponent implements OnInit {

  client: client ={
    id: '',
    name: '',
    email: '',
    password: '',
    profiles: [],
    dateCreated: ''
  }

  name: FormControl =     new FormControl(null, Validators.minLength(3));
  email: FormControl =    new FormControl(null, Validators.email);
  password: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: ClientService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  
  create(): void{
  this.service.create(this.client).subscribe(() => {
    this.toast.success('Client registered succesfully', 'Register');
    this.router.navigate(['clients'])
    
  }, ex => {
    
    if(ex.error.errors){
      ex.error.errors.forEach(element => {
        this.toast.error(element.message);
      });
    }else{
      this.toast.error(ex.error.message);
    }
  })
}

addProfile(profile: any): void{
  
  if(this.client.profiles.includes(profile)){
    this.client.profiles.splice(this.client.profiles.indexOf(profile), 1);
    
  }else {
    this.client.profiles.push(profile);
    
  }
}

validFields(): boolean{
  return this.name.valid && this.email.valid && this.password.valid
}
}
