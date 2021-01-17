import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FormPageComponent } from './form-page/form-page.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { LayoutModule } from 'src/app/shared/container/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PagesComponent, FormPageComponent, SuccessPageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ]
})
export class PagesModule { }
