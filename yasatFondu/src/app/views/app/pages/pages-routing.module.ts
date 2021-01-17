import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPageComponent } from './form-page/form-page.component';
import { PagesComponent } from './pages.component';
import { SuccessPageComponent } from './success-page/success-page.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: FormPageComponent },
      { path: 'form-page', component: FormPageComponent },
      { path: 'success', component: SuccessPageComponent },
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
