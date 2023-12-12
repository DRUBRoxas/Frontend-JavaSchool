import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputNumberModule } from 'primeng/inputnumber';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavComponent } from './shared/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StationService } from './services/station/station.service';
import { StationListComponent } from './components/station/station-list/station-list.component';
import { CreateStationComponent } from './components/station/create-station/create-station.component';
import { EditStationComponent } from './components/station/edit-station/edit-station.component';
import { StationFilterPipePipe } from './pipes/station/station-filter-pipe.pipe';
import { ScheduleListComponent } from './components/schedule/schedule-list/schedule-list.component';
import { CreateScheduleComponent } from './components/schedule/create-schedule/create-schedule.component';
import { RegisterComponent } from './auth/register/register.component';
import { EditScheduleComponent } from './components/schedule/edit-schedule/edit-schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TimePipe } from './time.pipe';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TrainListComponent } from './components/train/train-list/train-list.component';
import { CreateTrainComponent } from './components/train/create-train/create-train.component';
import { PassengerListComponent } from './components/passenger/passenger-list/passenger-list.component';
import { EditPassengerComponent } from './components/passenger/edit-passenger/edit-passenger.component';
import { CreatePassengerComponent } from './components/passenger/create-passenger/create-passenger.component';
import { JwtInterceptorService } from './services/auth/jwt-interceptor.service';
import { ErrorInterceptorService } from './services/auth/error-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    NavComponent,
    StationListComponent,
    CreateStationComponent,
    EditStationComponent,
    StationFilterPipePipe,
    ScheduleListComponent,
    CreateScheduleComponent,
    RegisterComponent,
    EditScheduleComponent,
    TimePipe,
    TrainListComponent,
    CreateTrainComponent,
    PassengerListComponent,
    EditPassengerComponent,
    CreatePassengerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToastModule,
    InputNumberModule,
    InputTextModule,
    CardModule
  ],
  providers: [StationService,
              StationFilterPipePipe, 
              TimePipe, 
              MessageService,
              {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true},
              {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true},
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
