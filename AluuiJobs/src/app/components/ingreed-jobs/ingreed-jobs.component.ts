import { Component, OnInit } from '@angular/core';
import { IngreedService } from 'src/app/services/ingreed.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-ingreed-jobs',
  templateUrl: './ingreed-jobs.component.html',
  styleUrls: ['./ingreed-jobs.component.scss']
})
export class IngreedJobsComponent implements OnInit {
  jobs$: Observable<any>;

  constructor(private ingreedJobService: IngreedService) {
    this.jobs$ = this.ingreedJobService.jobs$;
  }

  ngOnInit() {
    console.log('init comp', this.ingreedJobService.ingreedJobs);

    // this.ingreedJobService.ingreedJobs;
  }

}
