import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { addeditComponent } from './add-edit/add-edit.component'

import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { routing } from './app.routing';
import { RouterModule } from '@angular/router';
import { homeComponent } from './home-component';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
	AppComponent,
	addeditComponent,
	homeComponent,
  ],
  imports: [
	BrowserModule,
	CommonModule,
	BrowserAnimationsModule,
	MatInputModule,
	MatTableModule,
	MatDatepickerModule,
	MatDialogModule,
	MatRadioModule,
	MatButtonModule,
	MatIconModule,
	MatPaginatorModule,
	MatSortModule,
	MatFormFieldModule,
	MatNativeDateModule, 
	routing,
	MatSelectModule,

	
  ],
  exports: [
        
	MatInputModule,
	MatTableModule,
	MatDatepickerModule,
	MatDialogModule,
	MatRadioModule,
	MatButtonModule,
	MatIconModule,
	MatPaginatorModule,
	MatSortModule,
	RouterModule,
	MatFormFieldModule,
	MatInputModule,
	MatNativeDateModule,
	MatSelectModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
