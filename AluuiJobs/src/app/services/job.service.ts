import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private ingreedJobs = new BehaviorSubject<any>(null);
  public ingreedJobs$ = this.ingreedJobs.asObservable();

  private githubJobs = new BehaviorSubject<any>(null);
  public githubJobs$ = this.githubJobs.asObservable();

  indreedJobUrl = 'http://localhost:3000/jobs';
  githubJobUrl = 'http://localhost:3000/jobs/github';

  constructor(private http: HttpClient) {
    this.refreshJobs();
  }

  refreshJobs() {
    this.refreshOneJob(this.indreedJobUrl, this.ingreedJobs);
    this.refreshOneJob(this.githubJobUrl, this.githubJobs);
  }

  refreshOneJob(url: string, sourceStream: BehaviorSubject<any>) {
    this.http.get(url).subscribe(
      jobs => {
        sourceStream.next(jobs);
      },
      err => console.log('error', err)
    );
  }
}
