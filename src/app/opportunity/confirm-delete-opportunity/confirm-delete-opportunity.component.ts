import { OpportunityService } from './../../opportunity.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-confirm-delete-opportunity',
  templateUrl: './confirm-delete-opportunity.component.html',
  styleUrls: ['./confirm-delete-opportunity.component.css']
})
export class ConfirmDeleteOpportunityComponent implements OnInit {

  @Input() selectedOpportunities = new Array();

  @Output() updatedOpportunities = new EventEmitter<boolean>();

  constructor(private opportunityService: OpportunityService) { }

  ngOnInit() {
  }

  deleteOpportunities() {
    console.log('Selected Opportunities : ' + this.selectedOpportunities);
    this.opportunityService.deleteOpportunities(this.selectedOpportunities)
      .subscribe( (data: any) => {
        console.log(data);
        jQuery('#confirmDeleteOpportunityModal').modal('hide');
        this.updatedOpportunities.emit(data);
      },
      (error: any) => {
          console.log(error);
      });
  }

}
