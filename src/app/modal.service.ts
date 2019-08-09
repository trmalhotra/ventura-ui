import { Profile } from './profile.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private selectedProfileSource = new Subject<string>();

  // Observable string streams
  selectedProfile$ = this.selectedProfileSource.asObservable();

  constructor() { }

  confirmSelection(profile: Profile) {
    this.selectedProfileSource.next();
  }
}
