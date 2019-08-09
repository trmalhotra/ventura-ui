import { Skills } from 'src/app/skills.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Profile } from '../profile.model';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { FormArray } from '@angular/forms';

declare var jQuery: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles: Profile[];

  selectedProfile: Profile;

  selectProfileForEdit: Profile[] = new Array();

  selectedProfileIds  = new Array();

  selectedAll: any;

  checkedEditProfile: Profile;

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getActiveProfiles()
      .subscribe( data => {
        this.profiles = data;
      });
  }

  selectAll() {
    this.selectedAll = !this.selectedAll;
    this.selectedProfileIds = [];
    this.selectProfileForEdit = [];
    for (let i = 0; i < this.profiles.length; i++) {
        this.profiles[i].selected = this.selectedAll;
        this.onChangeProfile(this.profiles[i].selected, this.profiles[i]);
    }
}

  updateTable(event) {
    console.log(event);
    this.profiles.push(event);
  }

  updateTableAfterDelete(event) {
    console.log(event);
    this.selectedProfileIds = [];
    this.profiles = event;
  }

  updateTableAfterEdit(event) {
    console.log(event);
    this.selectedProfileIds = [];
    this.selectProfileForEdit = [];
    const index = this.selectedProfileIds.indexOf(event.id);
    this.profiles.splice(index, 1);
    this.profiles.push(event);
  }


  onClickShowModal(profile) {
    this.selectedProfile = profile;
  }

  validateDeleteSelection() {
    console.log(this.selectedProfileIds);
    if (this.selectedProfileIds == null || this.selectedProfileIds === undefined || this.selectedProfileIds.length === 0 ) {
      jQuery('#selectProfileModal').modal('show');
    } else {
      jQuery('#confirmDeleteModal').modal('show');
    }
  }

  validateEditSelection() {
    if (this.selectedProfileIds == null || this.selectedProfileIds === undefined || this.selectedProfileIds.length === 0 ) {
      jQuery('#selectProfileModal').modal('show');
    } else if (this.selectedProfileIds.length > 1 ) {
      jQuery('#selectOneProfileModal').modal('show');
    } else {
      this.checkedEditProfile = this.selectProfileForEdit[0];
      //alert(this.checkedEditProfile.firstName);
      jQuery('#editProfileModal').modal('show');
    }
  }

  onChangeProfile(isChecked: boolean, profile: Profile) {
    if (isChecked) {
      this.selectedProfileIds.push(profile.id);
      this.selectProfileForEdit.push(profile);
    } else {
      const index = this.selectedProfileIds.indexOf(profile.id);
      const indexProfile = this.selectProfileForEdit.indexOf(profile);
      this.selectedProfileIds.splice(index, 1);
      this.selectProfileForEdit.splice(indexProfile, 1);
    }
    console.log("Selected Profiles: " + this.selectedProfileIds);
    //console.log("Selected Profiles for Edit: " + this.selectProfileForEdit[0].firstName);
  }

  onChangeSelected() {
    let totalSelected =  0;
    for (let i = 0; i < this.profiles.length; i++) {
          if (this.profiles[i].selected) {
            totalSelected++;
          }
      }
    this.selectedAll = totalSelected === this.profiles.length;
  }
}
