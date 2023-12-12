import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { StationListComponent } from './components/station/station-list/station-list.component';
import { CreateStationComponent } from './components/station/create-station/create-station.component';
import { EditStationComponent } from './components/station/edit-station/edit-station.component';
import { ScheduleListComponent } from './components/schedule/schedule-list/schedule-list.component';
import { CreateScheduleComponent } from './components/schedule/create-schedule/create-schedule.component';
import { EditScheduleComponent } from './components/schedule/edit-schedule/edit-schedule.component';
import { RegisterComponent } from './auth/register/register.component';
import { TrainListComponent } from './components/train/train-list/train-list.component';
import { CreateTrainComponent } from './components/train/create-train/create-train.component';
import { PassengerListComponent } from './components/passenger/passenger-list/passenger-list.component';
import { CreatePassengerComponent } from './components/passenger/create-passenger/create-passenger.component';
import { EditPassengerComponent } from './components/passenger/edit-passenger/edit-passenger.component';

const routes: Routes = [
  {path:'home',component:DashboardComponent,title:'Home'},
  {path:'login',component:LoginComponent,title:'Login'},
  {path:'register',component:RegisterComponent,title:'Register'},
  {path:'station-list',component:StationListComponent,title:'List Stations'},
  {path:'create-station',component:CreateStationComponent,title:'Add Station'},
  {path:'edit-station/:id',component:EditStationComponent,title:'Edit Station'},
  {path:'schedule-list',component:ScheduleListComponent,title:'List Schedules'},
  {path:'create-schedule',component:CreateScheduleComponent,title:'Add Schedule'},
  {path:'edit-schedule/:id', component:EditScheduleComponent,title:'Edit Schedules'},
  {path:'train-list',component:TrainListComponent,title:'Train list'},
  {path:'create-train',component:CreateTrainComponent,title:'Add Train'},
  {path:'passenger-list',component:PassengerListComponent,title:'List Passenger'},
  {path:'create-passenger',component:CreatePassengerComponent,title:'Add Passenger'},
  {path:'edit-passenger/:id', component:EditPassengerComponent,title:'Edit Passenger'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
