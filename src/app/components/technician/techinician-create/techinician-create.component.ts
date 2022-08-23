import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { technician } from 'src/app/models/techinician';
import { TechinicianService } from 'src/app/services/techinician.service';

@Component({
  selector: 'app-techinician-create',
  templateUrl: './techinician-create.component.html',
  styleUrls: ['./techinician-create.component.css']
})
export class TechinicianCreateComponent implements OnInit {

  technician: technician ={
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
    private service: TechinicianService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  
  create(): void{
  this.service.create(this.technician).subscribe(() => {
    this.toast.success('Technician registered succesfully', 'Register');
    this.router.navigate(['technicians'])
    
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
  
  if(this.technician.profiles.includes(profile)){
    this.technician.profiles.splice(this.technician.profiles.indexOf(profile), 1);
    
  }else {
    this.technician.profiles.push(profile);
    
  }
}

validFields(): boolean{
  return this.name.valid && this.email.valid && this.password.valid
}
}
