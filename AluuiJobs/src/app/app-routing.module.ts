import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngreedJobsComponent } from './components/ingreed-jobs/ingreed-jobs.component';


const routes: Routes = [{
  path: '', component: IngreedJobsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
