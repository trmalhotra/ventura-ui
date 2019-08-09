import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/profile.model';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

  @Input() profile: Profile;

  constructor() { }

  ngOnInit() {

  }

}
