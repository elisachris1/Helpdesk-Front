import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { technician } from 'src/app/models/techinician';
import { TechinicianService } from 'src/app/services/techinician.service';

@Component({
  selector: 'app-technician-list',
  templateUrl: './technician-list.component.html',
  styleUrls: ['./technician-list.component.css']
})
export class TechnicianListComponent implements OnInit {
  ELEMENT_DATA: technician[] = [
    
  ]
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<technician>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private Service: TechinicianService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  findAll(){
    this.Service.findAll().subscribe(response =>{
      this.ELEMENT_DATA = response
      this.dataSource = new MatTableDataSource<technician>(response);
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
