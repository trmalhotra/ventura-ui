import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

  @Input() selectedProfile: any;

  constructor() { }

  ngOnInit() {
  }

}
