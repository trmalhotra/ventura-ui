import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Profile } from './profile.model';
import { Observable } from 'rxjs';
import { Skills } from './skills.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {}

  private profileUrl = '/ventura/profile';

  public getActiveProfiles() {
    return this.http.get<Profile[]>(this.profileUrl + '/active');
  }

  public deleteProfiles(selectedProfiles: Profile[]) {
    return this.http.put<Profile[]>(this.profileUrl + '/delete', selectedProfiles);
  }

  public createProfile(profile: Profile) {
    profile.isActive = true;
    return this.http.post<Profile>(this.profileUrl + '/add', profile);
  }

  public updateProfile(profile: Profile) {
    return this.http.put<Profile>(this.profileUrl + '/update', profile);
  }

  public getSkills() {
    return this.http.get<Skills[]>(this.profileUrl + '/skills');
  }
}
