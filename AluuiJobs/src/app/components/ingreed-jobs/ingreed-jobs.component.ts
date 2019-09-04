import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-ingreed-jobs',
  templateUrl: './ingreed-jobs.component.html',
  styleUrls: ['./ingreed-jobs.component.scss']
})
export class IngreedJobsComponent {
  jobs$: Observable<any>;

  constructor(private ingreedJobService: JobService) {
    this.jobs$ = this.ingreedJobService.ingreedJobs$;
  }
}
