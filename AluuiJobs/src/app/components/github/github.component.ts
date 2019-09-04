import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  jobs$: Observable<any>;

  constructor(private jobService: JobService) {
    this.jobs$ = this.jobService.githubJobs$;
  }

  ngOnInit() {}
}
