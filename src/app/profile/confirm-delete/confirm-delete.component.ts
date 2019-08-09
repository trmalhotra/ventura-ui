import { Profile } from './../../profile.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileService } from 'src/app/profile.service';

declare var jQuery: any;

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  @Input() selectedProfiles = new Array();

  @Output() updatedProfiles = new EventEmitter<boolean>();

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }


  deleteProfile(): void {
    console.log("Selected Profiles : " + this.selectedProfiles);
    this.profileService.deleteProfiles(this.selectedProfiles)
      .subscribe( (data: any) => {
        //this.profiles = data;
        console.log(data);
        jQuery('#confirmDeleteModal').modal('hide');
        this.updatedProfiles.emit(data);
      },
      (error: any) => {
          console.log(error);
      });
  }

}
