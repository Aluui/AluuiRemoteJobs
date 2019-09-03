import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngreedService {
  ingreedJobs = new BehaviorSubject<any>(null);
  public jobs$ = this.ingreedJobs.asObservable();
  url = 'http://localhost:3000/jobs';

  constructor(private http: HttpClient) {
    this.refreshJobs();
  }

  refreshJobs() {
    this.http.get(this.url).subscribe(
      jobs => {
        this.ingreedJobs.next(jobs);
      },
      err => console.log('error', err)
    );
  }
}
