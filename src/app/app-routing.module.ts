import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReativeFormComponent } from './reative-form/reative-form.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', redirectTo: 'RForm', pathMatch: 'full' },
  { path: 'RForm', component: ReativeFormComponent },
  { path: 'TDForm', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
