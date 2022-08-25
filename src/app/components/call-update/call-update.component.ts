import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Call } from 'src/app/models/call';
import { client } from 'src/app/models/client';
import { technician } from 'src/app/models/techinician';
import { CallService } from 'src/app/services/call.service';
import { ClientService } from 'src/app/services/client.service';
import { TechinicianService } from 'src/app/services/techinician.service';
@Component({
  selector: 'app-call-update',
  templateUrl: './call-update.component.html',
  styleUrls: ['./call-update.component.css']
})
export class CallUpdateComponent implements OnInit {

  call: Call = {
    priority: '',
    status: '',
    title: '',
    description: '',
    technician: '',
    client: '',
    clientName: '',
    technicianName: '',
  }
  clients: client [] = []
  technicians: technician [] = []

  priority:     FormControl = new FormControl(null, [Validators.required])
  status:       FormControl = new FormControl(null, [Validators.required])
  title:        FormControl = new FormControl(null, [Validators.required])
  description:  FormControl = new FormControl(null, [Validators.required])
  technician:   FormControl = new FormControl(null, [Validators.required])
  client:       FormControl = new FormControl(null, [Validators.required])

  constructor( 
  
  private callService: CallService,
  private clientService: ClientService,
  private technicianService: TechinicianService,
  private toastService: ToastrService,
  private router: Router,
  private route: ActivatedRoute,
  
  ){ }

  ngOnInit(): void {
    this.call.id = this.route.snapshot.paramMap.get('id');
    this.findById()
    this.findAllClients();
    this.findAllTechnicians();
  }

  findById(): void{
    this.callService.findById(this.call.id).subscribe(response =>{
      this.call = response;
    }, ex =>{
      this.toastService.error(ex.error.error);
    }
    )
  }

  update(): void{
    this.callService.update(this.call).subscribe(response =>{
      this.toastService.success('Call updated successfully', 'Update call');
      this.router.navigate(['calls']);
    }, ex =>{
      
      this.toastService.error(ex.error.error);
    })
  }

  findAllClients(): void{
    this.clientService.findAll().subscribe(response =>{
        this.clients = response;
    })
 
  }

  findAllTechnicians(): void{
    this.technicianService.findAll().subscribe(response =>{
      this.technicians = response;
    })
  }

validFields(): boolean{
  return this.priority.valid && this.status.valid &&
  this.title.valid && this.description.valid &&
  this.technician.valid &&  this.client.valid
}

returnStatus(status: any): string {
  if(status == '0') {
    return 'OPEN'
  } else if(status == '1') {
    return 'ONGOING'
  } else {
    return 'CLOSED'
  }
}

returnPriority(priority: any): string {
  if(priority == '0') {
    return 'LOW'
  } else if(priority == '1') {
    return 'MEDIUM'
  } else {
    return 'HIGH'
  }
}

}