import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface desgination {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  //styleUrls: ['./add-edit.component.css']
})


export class addeditComponent {

  desgination: desgination[] = [
    {value: 'option-1', viewValue: 'CEO'},
    {value: 'option-2', viewValue: 'Peon'},
  ];
}
