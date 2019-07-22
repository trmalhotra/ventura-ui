import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter<boolean>();

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
  }

  addProfile( form ) {
    this.profileService.createProfile(form)
    .subscribe(
      (response: any) => {
        console.log(response);
        location.reload();
        this.closeModalEvent.emit(response);
    },
    (error: any) => {
        console.log(error)
    });


  }


}
