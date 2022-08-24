import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Call } from 'src/app/models/call';

@Component({
  selector: 'app-call-list',
  templateUrl: './call-list.component.html',
  styleUrls: ['./call-list.component.css']
})
export class CallListComponent implements OnInit {

  ELEMENT_DATA: Call[] = [
    {
    
        id:                           1,
        openDate:       '2022/06/21',
        closeDate:         '2022/06/21',
        priority:               'HIGH',
        status:             'ONGOING',
        title:                'CALL 1',
        description:       'CALL TEST',
        technician:                   1,
        client:                       6,
        clientName:      'Fermin Torres',
        technicianName:   'Steve Rogers',
      
  }
    
  ]
  
  displayedColumns: string[] = ['id', 'title', 'client', 'technician','openDate', 'priority', 'status', 'actions'];
  dataSource = new MatTableDataSource<Call>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

