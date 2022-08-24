import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Call } from 'src/app/models/call';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-call-list',
  templateUrl: './call-list.component.html',
  styleUrls: ['./call-list.component.css']
})
export class CallListComponent implements OnInit {

  ELEMENT_DATA: Call[] = []
  FILTERED_DATA: Call[] = []

  
  displayedColumns: string[] = ['id', 'title', 'client', 'technician','openDate', 'priority', 'status', 'actions'];
  dataSource = new MatTableDataSource<Call>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: CallService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe(response =>{
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource<Call>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  returnStatus(status: any): string{
    if(status = '0') {
      return 'OPEN'
    }else if(status ='1'){
      return 'ONGOING'
    }else{
      return 'CLOSED'
    }
  }

  returnPriority(priority: any): string{
    if(priority = '0') {
      return 'LOW'
    }else if(priority ='1'){
      return 'MEDIUM'
    }else{
      return 'HIGH'
    }
  }

  orderByStatus(status: any): void{
    let list: Call[] = []
    this.ELEMENT_DATA.forEach(element =>{
      if(element.status = status)
      list.push(element)
    });
    this.FILTERED_DATA = list;
    this.dataSource = new MatTableDataSource<Call>(this.FILTERED_DATA);
    this.dataSource.paginator = this.paginator;
  }

}

