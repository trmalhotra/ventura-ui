import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Profile } from './profile.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {}

  private profileUrl = '/ventura/profile';

  public getAllProfiles() {
    return this.http.get<Profile[]>(this.profileUrl + '/all');
  }

  public deleteProfile(profile: Profile) {
    return this.http.delete(this.profileUrl + '/' + profile);
  }

  public createProfile(profile: Profile) {
    return this.http.post<Profile>(this.profileUrl + '/add', profile);
  }
}
