import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  age: number;
  mob: number;
  email: string;
  doj:number;
  empcode:string;
  desgination:string;
  department:string;
  action:string;
  
}

const ELEMENT_DATA = [
  {name: 'Test', age: 11, mob: 1234567890, email:'test@xyz.com', doj: '12-12-2020', empcode:'1234', desgination:'test', department:'IT', action:''},
  {name: 'Test', age: 11, mob: 1234567890, email:'test@xyz.com', doj: '12-12-2020', empcode:'1234', desgination:'test', department:'IT', action:''},
  {name: 'Test', age: 12, mob: 1234567890, email:'test@xyz.com', doj: '12-12-2020', empcode:'1234', desgination:'test', department:'IT', action:''},
  {name: 'Test', age: 13, mob: 1234567890, email:'test@xyz.com', doj: '12-12-2020', empcode:'1234', desgination:'test', department:'IT', action:''},
  {name: 'Test', age: 14, mob: 1234567890, email:'test@xyz.com', doj: '12-12-2020', empcode:'1234', desgination:'test', department:'IT', action:''},
  {name: 'Test', age: 15, mob: 1234567890, email:'test@xyz.com', doj: '12-12-2020', empcode:'1234', desgination:'test', department:'IT', action:''},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'task';
  displayedColumns: string[] = ['name', 'age', 'mob', 'email', 'doj', 'empcode', 'desgination', 'department', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource:MatTableDataSource<any>;
  
ngOnInit(){
	this.dataSource = new MatTableDataSource(ELEMENT_DATA);;
	setTimeout(()=>{
  this.dataSource.sort = this.sort;
	},100)
	
}
  
  
}
