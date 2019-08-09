import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Opportunity } from '../opportunity.model';
import { OpportunityService } from '../opportunity.service';
import { FormArray } from '@angular/forms';

declare var jQuery: any;

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {

  opportunities: Opportunity[];
  selectedOpportunity: Opportunity;
  selectOpportunityForEdit: Opportunity[] = new Array();
  selectedOpportunityIds  = new Array();
  selectedAll: any;
  checkedEditOpportunity: Opportunity;

  constructor(private router: Router, private opportunityService: OpportunityService) { }

  ngOnInit() {
    this.opportunityService.getActiveOpportunities()
      .subscribe( data => {
        this.opportunities = data;
      });
  }

  selectAll() {
    this.selectedAll = !this.selectedAll;
    this.selectedOpportunityIds = [];
    this.selectOpportunityForEdit = [];
    for (let i = 0; i < this.opportunities.length; i++) {
        this.opportunities[i].selected = this.selectedAll;
        this.onChangeOpportunity(this.opportunities[i].selected, this.opportunities[i]);
    }
  }


  updateTableAfterDelete(event) {
    console.log(event);
    this.selectedOpportunityIds = [];
    this.opportunities = event;
  }

  updateTableAfterEdit(event) {
    console.log(event);
    this.selectedOpportunityIds = [];
    this.selectOpportunityForEdit = [];
    const index = this.selectedOpportunityIds.indexOf(event.id);
    this.opportunities.splice(index, 1);
    this.opportunities.push(event);
  }

  updateTable(event) {
    console.log(event);
    this.opportunities.push(event);
  }

  onClickShowModal(opportunity) {
    this.selectedOpportunity = opportunity;
  }

  validateDeleteSelection() {
    console.log(this.selectedOpportunityIds);
    if (this.selectedOpportunityIds == null || this.selectedOpportunityIds === undefined || this.selectedOpportunityIds.length === 0 ) {
      jQuery('#selectOpportunityModal').modal('show');
    } else {
      jQuery('#confirmDeleteOpportunityModal').modal('show');
    }
  }

  validateEditSelection() {
    if (this.selectedOpportunityIds == null || this.selectedOpportunityIds === undefined || this.selectedOpportunityIds.length === 0 ) {
      jQuery('#selectOpportunityModal').modal('show');
    } else if (this.selectedOpportunityIds.length > 1 ) {
      jQuery('#selectOneOpportunityModal').modal('show');
    } else {
      this.checkedEditOpportunity = this.selectOpportunityForEdit[0];
      jQuery('#editOpportunityModal').modal('show');
    }
  }

  onChangeOpportunity(isChecked: boolean, opportunity: Opportunity) {
    if (isChecked) {
      this.selectedOpportunityIds.push(opportunity.id);
      this.selectOpportunityForEdit.push(opportunity);
    } else {
      const index = this.selectedOpportunityIds.indexOf(opportunity.id);
      const indexOpportunity = this.selectOpportunityForEdit.indexOf(opportunity);
      this.selectedOpportunityIds.splice(index, 1);
      this.selectOpportunityForEdit.splice(indexOpportunity, 1);
    }
    console.log('Selected Opportunities: ' + this.selectedOpportunityIds);
  }

  onChangeSelected() {
    let totalSelected =  0;
    for (let i = 0; i < this.opportunities.length; i++) {
          if (this.opportunities[i].selected) {
            totalSelected++;
          }
      }
    this.selectedAll = totalSelected === this.opportunities.length;
  }

}
