import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Profile } from '../profile.model';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles: Profile[];

  modalVisible = false;

  @Output() selectedProfile = new EventEmitter();

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getAllProfiles()
      .subscribe( data => {
        this.profiles = data;
      });
  }

  deleteProfile(profile: Profile): void {
    this.profileService.deleteProfile(profile)
      .subscribe( data => {
        this.profiles = this.profiles.filter(p => p !== profile);
      });
  }

  onClose(isVisible: boolean) {
    this.modalVisible = isVisible;
   }

   showModal(){
    this.modalVisible = true;
  }

  updateTable(event) {
    console.log(event);
    this.profiles.push(event);
  }

  onClickShowModal(profile) {
   //alert(profile.firstName);
    this.selectedProfile.emit(profile);
  }

}
