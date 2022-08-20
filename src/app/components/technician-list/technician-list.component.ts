import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { technician } from 'src/app/models/techinician';

@Component({
  selector: 'app-technician-list',
  templateUrl: './technician-list.component.html',
  styleUrls: ['./technician-list.component.css']
})
export class TechnicianListComponent implements OnInit {
  ELEMENT_DATA: technician[] = [
    {
      id: 1,
      name: 'Elisa Rovani',
      email: 'elisa@email.com',
      password: '1234',
      profiles: ['0'],
      dateCreated: '2022/08/20'
    }
  ]
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<technician>(this.ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
