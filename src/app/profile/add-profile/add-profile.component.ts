import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfileService } from 'src/app/profile.service';
import { Skills } from 'src/app/skills.model';
import { Profile } from 'src/app/profile.model';

declare var jQuery: any;

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter<boolean>();

  skills: Skills[];

  newProfile: Profile;

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    this.newProfile = new Profile();
    this.profileService.getSkills()
    .subscribe( data => {
      this.skills = data;
      console.log(this.skills);
    });
  }

  addProfile( profileForm: Profile ) {

      console.log(profileForm.firstName);

      this.validationForm();

      if (!( profileForm.firstName === undefined)) {
        this.profileService.createProfile(profileForm)
        .subscribe(
          (response: any) => {
            console.log(response);
            jQuery('#profileModal').modal('hide');
            this.closeModalEvent.emit(response);
        },
        (error: any) => {
            console.log(error);
        });
     }

  }

 validationForm() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByName('formId');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
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
