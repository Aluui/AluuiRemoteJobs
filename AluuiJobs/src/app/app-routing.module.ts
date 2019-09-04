import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngreedJobsComponent } from './components/ingreed-jobs/ingreed-jobs.component';
import { GithubComponent } from './components/github/github.component';

const routes: Routes = [
  {
    path: '',
    component: IngreedJobsComponent
  },
  {
    path: 'github',
    component: GithubComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
