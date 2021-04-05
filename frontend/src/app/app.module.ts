import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentService } from './service/assignment.service';
import { DepartmentService } from './service/department.service';
import { EmployeeService } from './service/employee.service';
import { LocationService } from './service/location.service';
import { ProjectService } from './service/project.service';
import { UserCredentialService } from './service/user-credential.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    EmployeeService,
    UserCredentialService,
    ProjectService,
    AssignmentService,
    DepartmentService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}

