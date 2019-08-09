import { Opportunity } from './opportunity.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(private http: HttpClient) {}

  private opportunityUrl = '/ventura/opportunity';

  public getActiveOpportunities() {
    return this.http.get<Opportunity[]>(this.opportunityUrl + '/active');
  }

  public deleteOpportunities(selectedOpportunities: Opportunity[]) {
    return this.http.put<Opportunity[]>(this.opportunityUrl + '/delete', selectedOpportunities);
  }

  public createOpportunity(opportunity: Opportunity) {
    opportunity.isActive = true;
    opportunity.dateCreated = new Date();
    opportunity.profileIds = [];
    return this.http.post<Opportunity>(this.opportunityUrl + '/add', opportunity);
  }

  public updateOpportunity(opportunity: Opportunity) {
    return this.http.put<Opportunity>(this.opportunityUrl + '/update', opportunity);
  }

}
