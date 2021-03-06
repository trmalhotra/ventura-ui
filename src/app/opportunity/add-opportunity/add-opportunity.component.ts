import { OpportunityService } from './../../opportunity.service';
import { Router } from '@angular/router';
import { Opportunity } from './../../opportunity.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-add-opportunity',
  templateUrl: './add-opportunity.component.html',
  styleUrls: ['./add-opportunity.component.css']
})
export class AddOpportunityComponent implements OnInit {


  @Output() closeOpportunityModalEvent = new EventEmitter<boolean>();

  newOpportunity: Opportunity;

  constructor(private router: Router, private oppportunityService: OpportunityService) { }

  ngOnInit() {
    this.newOpportunity = new Opportunity();
  }

  addOpportunity( opportunity: Opportunity ) {

    this.validationForm();

    if (!( opportunity.position === undefined)) {
      this.oppportunityService.createOpportunity(opportunity)
      .subscribe(
        (response: any) => {
          console.log(response);
          jQuery('#opportunityModal').modal('hide');
          this.closeOpportunityModalEvent.emit(response);
      },
      (error: any) => {
          console.log(error);
      });
   }
  }

  validationForm() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByName('opportunityFormName');
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
