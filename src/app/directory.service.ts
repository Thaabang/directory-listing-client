import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getDirectoryListing(path: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/directory-listing?path=${path}`);
  }
}
