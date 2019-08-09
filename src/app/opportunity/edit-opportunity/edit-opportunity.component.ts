import { OpportunityService } from './../../opportunity.service';
import { Router } from '@angular/router';
import { Opportunity } from './../../opportunity.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-edit-opportunity',
  templateUrl: './edit-opportunity.component.html',
  styleUrls: ['./edit-opportunity.component.css']
})
export class EditOpportunityComponent implements OnInit {

  @Input() opportunity: Opportunity;

  @Output() closeModalEvent = new EventEmitter<boolean>();

  constructor(private router: Router, private opportunityService: OpportunityService) { }

  ngOnInit() {
  }

  updateOpportunity(opportunityForm: Opportunity) {

    this.validationForm();

    if (!( opportunityForm.position === undefined)) {
      this.opportunityService.updateOpportunity(opportunityForm)
      .subscribe(
        (response: any) => {
          console.log(response);
          jQuery('#editOpportunityModal').modal('hide');
          this.closeModalEvent.emit(response);
      },
      (error: any) => {
          console.log(error);
      });
    }
  }

  validationForm() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByName('editOpportunityFormName');
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
