import { FormsModule } from '@angular/forms';
import { Profile } from './../../profile.model';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Skills } from 'src/app/skills.model';
import { ProfileService } from 'src/app/profile.service';

declare var jQuery: any;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  @Input() profile: Profile;

  @Output() closeModalEvent = new EventEmitter<boolean>();

  skills: Skills[];

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getSkills()
    .subscribe( data => {
      this.skills = data;
      console.log(this.skills);
    });
  }

  updateProfile(profileForm: Profile) {

    console.log(profileForm.firstName);
    console.log(profileForm.lastName);
    console.log(profileForm.id);
    this.validationForm();

    if (!( profileForm.firstName === undefined)) {
      this.profileService.updateProfile(profileForm)
      .subscribe(
        (response: any) => {
          console.log(response);
          jQuery('#editProfileModal').modal('hide');
          this.closeModalEvent.emit(response);
      },
      (error: any) => {
          console.log(error);
      });
   }

}

validationForm() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByName('editFormName');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          console.log(form.checkValidity());
          form.addEventListener('click', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
    }

}
